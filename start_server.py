#!/usr/bin/env python3
"""
DigiSylva Local Web Server
Run this script to launch the website locally.
Usage: python3 start_server.py
Then open: http://localhost:8080 in your browser.
"""
import http.server
import socketserver
import webbrowser
import os

PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"  [{self.address_string()}] {format % args}")

print("=" * 50)
print("  🌲 DigiSylva Local Server")
print("=" * 50)
print(f"  Serving at: http://localhost:{PORT}")
print(f"  Press Ctrl+C to stop\n")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    webbrowser.open(f"http://localhost:{PORT}/index.html")
    httpd.serve_forever()
