import datetime
import base64
try:
    import pytz
except ImportError:
    pytz = None


def read_text(path):
    with open(path, encoding='utf-8') as file:
        return file.read()


def compile_assets(html, css, js):
    try:
        if pytz:
            compilation_time = datetime.datetime.now().astimezone(pytz.timezone('Europe/Warsaw')).strftime("%Y-%m-%d_%H:%M")
        else:
            raise Exception("pytz not available")
    except Exception:
        compilation_time = datetime.datetime.now().strftime("%Y-%m-%d_%H:%M")
    # Inline background.jpg as data URI if available
    try:
        with open("background.jpg", "rb") as img:
            b64 = base64.b64encode(img.read()).decode()
            img_background = f'url("data:image/jpeg;base64,{b64}");'
            # Robust replacement: handle single/double quotes and whitespace
            import re
            css = re.sub(r"url\s*\(\s*['\"]?background\.jpg['\"]?\s*\)\s*;", img_background, css)
    except FileNotFoundError:
        pass
    html = html.replace('<span id="tool-version"></span>', f'<span id="tool-version"> <strong>v.{compilation_time}</strong></span>')
    import re as _re
    html = _re.sub(r'<link\s+rel="stylesheet"\s+href="style\.css[^"]*"\s*/?>', '', html)
    html = html.replace('</head>', f'<style>\n{css}\n</style>\n</head>')
    html = html.replace('<script src="app.js"></script>', '')
    html = html.replace('</body>', f'<script>\n{js}\n</script>\n</body>')
    return html


if __name__ == "__main__":
    html = read_text('sql-command-builder.html')
    css = read_text('style.css')
    js = read_text('app.js')
    html_final = 'index.html'

    with open(html_final, 'w', encoding='utf-8') as output:
        output.write(compile_assets(html, css, js))
    print(f"Built {html_final} successfully.")
