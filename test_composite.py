import numpy as np
from PIL import Image, ImageFilter, ImageDraw

# Create a test canvas with #050505 background and neon yellow trapezoid
canvas = Image.new('RGBA', (700, 600), (5, 5, 5, 255))
draw = ImageDraw.Draw(canvas)

# Draw neon yellow trapezoid
poly = [(140, 40), (620, 60), (560, 540), (80, 500)]
draw.polygon(poly, fill=(223, 255, 0, 255))

# Load the cutouts
ip = Image.open('public/assets/hero/iphone-purple-hero.png').convert('RGBA')
ap = Image.open('public/assets/hero/airpods-hero.png').convert('RGBA')
watch = Image.open('public/assets/hero/watch-hero.png').convert('RGBA')

# Resize appropriately
ip = ip.resize((320, int(320 * ip.height / ip.width)), Image.Resampling.LANCZOS)
ap = ap.resize((190, int(190 * ap.height / ap.width)), Image.Resampling.LANCZOS)
watch = watch.resize((220, int(220 * watch.height / watch.width)), Image.Resampling.LANCZOS)

# Paste iPhone in center
canvas.paste(ip, (190, 40), ip)
# Paste AirPods on left
canvas.paste(ap, (50, 210), ap)
# Paste Watch on right
canvas.paste(watch, (400, 260), watch)

canvas.save('scratch_composite_test.png')
print('Composite test generated')
