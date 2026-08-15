import numpy as np
from PIL import Image, ImageDraw, ImageFilter

im = Image.open('reference-homepage.png').convert('RGBA')

# 1. Extract iPhone 14 Pro Max with exact polygon mask
# Crop bbox around phone: (445, 70, 700, 485)
crop_x1, crop_y1 = 445, 70
iphone_crop = im.crop((crop_x1, crop_y1, 700, 485))

# Define polygon vertices relative to the crop box:
# The phone outer edge in absolute coordinates:
# Top-left corner curve: ~ (482, 74)
# Top-right corner curve: ~ (653, 110)
# Titanium right edge: ~ (690, 150) -> (550, 480) -> (525, 480)
# Bottom-left: ~ (446, 440) -> (482, 74)

# Create an anti-aliased mask at 4x supersampling
scale = 4
mask_img = Image.new('L', (iphone_crop.width * scale, iphone_crop.height * scale), 0)
draw = ImageDraw.Draw(mask_img)

# Exact phone silhouette in crop coords scaled by 4
# Phone boundary:
poly_pts = [
    (485 - crop_x1, 74 - crop_y1),
    (525 - crop_x1, 82 - crop_y1),
    (645 - crop_x1, 107 - crop_y1),
    (656 - crop_x1, 112 - crop_y1),
    (665 - crop_x1, 122 - crop_y1),
    (674 - crop_x1, 137 - crop_y1),
    (690 - crop_x1, 165 - crop_y1),
    (692 - crop_x1, 185 - crop_y1),
    (685 - crop_x1, 235 - crop_y1),
    (673 - crop_x1, 290 - crop_y1),
    (655 - crop_x1, 345 - crop_y1),
    (630 - crop_x1, 395 - crop_y1),
    (595 - crop_x1, 440 - crop_y1),
    (555 - crop_x1, 475 - crop_y1),
    (540 - crop_x1, 481 - crop_y1),
    (520 - crop_x1, 480 - crop_y1),
    (508 - crop_x1, 470 - crop_y1),
    (480 - crop_x1, 380 - crop_y1),
    (465 - crop_x1, 300 - crop_y1),
    (455 - crop_x1, 230 - crop_y1),
    (456 - crop_x1, 180 - crop_y1),
    (464 - crop_x1, 120 - crop_y1),
    (472 - crop_x1, 90 - crop_y1),
    (480 - crop_x1, 77 - crop_y1),
]

scaled_poly = [(x * scale, y * scale) for x, y in poly_pts]
draw.polygon(scaled_poly, fill=255)

# Downscale mask with Lanczos for smooth anti-aliased subpixel edges
mask_aa = mask_img.resize((iphone_crop.width, iphone_crop.height), Image.Resampling.LANCZOS)
# Slight blur to soften
mask_aa = mask_aa.filter(ImageFilter.GaussianBlur(0.6))

# Apply mask
arr_ip = np.array(iphone_crop)
arr_ip[:,:,3] = np.array(mask_aa)
clean_iphone = Image.fromarray(arr_ip)
clean_iphone.save('public/assets/hero/iphone-purple-hero.png')
print('iPhone masked cleanly!')
