from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent

REQUIRED = [
    "index.html",
    "about.html",
    "how-it-works.html",
    "impact.html",
    "plans.html",
    "css/style.css",
    "js/script.js",
    "images/scsc-diagram.png",
]

errors = []


class LinkChecker(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.source = source

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if name not in ("href", "src") or not value:
                continue

            url = urlsplit(value)

            # Only check local file references.
            if url.scheme or url.netloc or not url.path:
                continue

            path = unquote(url.path)

            if path.startswith("/"):
                errors.append(
                    f"{self.source.name}: use a relative path: {value}"
                )
                continue

            target = self.source.parent / path

            if not target.exists():
                errors.append(
                    f"{self.source.name}: missing local file: {value}"
                )


for filename in REQUIRED:
    path = ROOT / filename

    if not path.is_file() or path.stat().st_size == 0:
        errors.append(f"Required file missing or empty: {filename}")

for page in ROOT.glob("*.html"):
    checker = LinkChecker(page)
    checker.feed(page.read_text(encoding="utf-8-sig"))

if errors:
    print("Website checks failed:")
    for error in errors:
        print(f" - {error}")
    raise SystemExit(1)

print("Website checks passed: required files and local links exist.")