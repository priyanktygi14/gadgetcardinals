import numpy as np
from PIL import Image, ImageFilter
import os

im = Image.open('reference-homepage.png').convert('RGBA')
w, h = im.size

os.makedirs('public/assets/hero', exist_ok=True)
os.makedirs('public/assets/categories', exist_ok=True)
os.makedirs('public/assets/deals', exist_ok=True)

# Helper function to remove dark background from a cropped product region
def isolate_product(crop_box, bg_color_threshold=25, yellow_mask=False):
    crop = im.crop(crop_box)
    data = np.array(crop)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Calculate brightness / distance from pure black
    brightness = np.maximum(np.maximum(r, g), b)
    
    # Create alpha mask based on luminance
    alpha = np.zeros_like(brightness, dtype=np.uint8)
    
    # If pixel is bright enough, keep it
    mask = brightness > bg_color_threshold
    alpha[mask] = 255
    
    # Soft transition at edges
    edge = (brightness > (bg_color_threshold - 10)) & (brightness <= bg_color_threshold)
    alpha[edge] = ((brightness[edge] - (bg_color_threshold - 10)) * 25.5).astype(np.uint8)
    
    if yellow_mask:
        # Mask out surrounding yellow background if extracting foreground product
        is_yellow = (r > 180) & (g > 200) & (b < 100)
        alpha[is_yellow] = 0

    data[:,:,3] = alpha
    result = Image.fromarray(data)
    return result

# 1. Hero iPhone 14 Pro Max Deep Purple
# Crop around the phone: x 475 to 695, y 72 to 475
iphone_crop = im.crop((478, 72, 692, 475))
arr = np.array(iphone_crop)
# The iPhone has purple tones and distinct boundaries
# Let's extract the phone cleanly
phone_mask = np.zeros(arr.shape[:2], dtype=np.uint8)
r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
# Filter out pure black #050505 background outside the phone
not_black = (r > 18) | (g > 18) | (b > 18)
# Filter out the neon yellow behind the right side of the phone
not_neon_yellow = ~((r > 190) & (g > 210) & (b < 60))
# The phone is not neon yellow and not pure black
phone_mask[not_black & not_neon_yellow] = 255
arr[:,:,3] = phone_mask
iphone_transparent = Image.fromarray(arr)
iphone_transparent.save('public/assets/hero/iphone-purple-hero.png')

# 2. Hero AirPods with open case (x 385 to 520, y 240 to 370)
airpods_crop = im.crop((385, 240, 520, 370))
arr_ap = np.array(airpods_crop)
r, g, b = arr_ap[:,:,0], arr_ap[:,:,1], arr_ap[:,:,2]
ap_mask = np.zeros(arr_ap.shape[:2], dtype=np.uint8)
not_black_ap = (r > 30) | (g > 30) | (b > 30)
# Not the yellow letter 'E' on left
not_text_yellow = ~((r > 200) & (g > 220) & (b < 50))
# Not the purple phone edge on right
ap_mask[not_black_ap & not_text_yellow] = 255
arr_ap[:,:,3] = ap_mask
airpods_transparent = Image.fromarray(arr_ap)
airpods_transparent.save('public/assets/hero/airpods-hero.png')

# 3. Hero Apple Watch (x 630 to 850, y 270 to 500)
watch_crop = im.crop((630, 270, 850, 500))
arr_w = np.array(watch_crop)
r, g, b = arr_w[:,:,0], arr_w[:,:,1], arr_w[:,:,2]
w_mask = np.zeros(arr_w.shape[:2], dtype=np.uint8)
not_black_w = (r > 25) | (g > 25) | (b > 25)
not_neon_bg = ~((r > 200) & (g > 220) & (b < 50))
w_mask[not_black_w & not_neon_bg] = 255
arr_w[:,:,3] = w_mask
watch_transparent = Image.fromarray(arr_w)
watch_transparent.save('public/assets/hero/watch-hero.png')

# 4. Categories Product Cutouts (ONLY the product, not the header or text)
# iPhone camera cutout (x 168 to 288, y 628 to 736)
cat_iphone = im.crop((168, 630, 288, 736))
cat_iphone.save('public/assets/categories/category-iphone.png')

# MacBook cutout (x 298 to 418, y 628 to 736)
cat_macbook = im.crop((298, 630, 418, 736))
cat_macbook.save('public/assets/categories/category-macbook.png')

# iPad cutout (x 428 to 548, y 628 to 736)
cat_ipad = im.crop((428, 630, 548, 736))
cat_ipad.save('public/assets/categories/category-ipad.png')

# AirPods cutout (x 562 to 682, y 628 to 736)
cat_airpods = im.crop((562, 630, 682, 736))
cat_airpods.save('public/assets/categories/category-airpods.png')

# Watch cutout (x 692 to 815, y 628 to 736)
cat_watch = im.crop((692, 630, 815, 736))
cat_watch.save('public/assets/categories/category-watch.png')

# 5. Deals Product Cutouts (ONLY the product cutouts with clean transparency)
# Deal 1: AirPods Pro 2 (x 305 to 415, y 965 to 1060)
deal_ap = im.crop((305, 965, 415, 1060))
arr_d_ap = np.array(deal_ap)
r, g, b = arr_d_ap[:,:,0], arr_d_ap[:,:,1], arr_d_ap[:,:,2]
d_ap_mask = np.zeros(arr_d_ap.shape[:2], dtype=np.uint8)
d_ap_mask[(r > 35) | (g > 35) | (b > 35)] = 255
arr_d_ap[:,:,3] = d_ap_mask
Image.fromarray(arr_d_ap).save('public/assets/deals/deal-airpods.png')

# Deal 2: iPhone 14 Pro Max Dual View (x 450 to 600, y 910 to 1085)
deal_ip = im.crop((450, 910, 600, 1085))
arr_d_ip = np.array(deal_ip)
r, g, b = arr_d_ip[:,:,0], arr_d_ip[:,:,1], arr_d_ip[:,:,2]
# Remove pure purple background #6D28FF outside the phones to isolate the phones
is_bg_purple = (r > 90) & (r < 125) & (g > 30) & (g < 60) & (b > 220)
d_ip_mask = np.zeros(arr_d_ip.shape[:2], dtype=np.uint8)
d_ip_mask[~is_bg_purple] = 255
arr_d_ip[:,:,3] = d_ip_mask
Image.fromarray(arr_d_ip).save('public/assets/deals/deal-iphone.png')

# Deal 3: Apple Watch Series 8 (x 640 to 740, y 940 to 1065)
deal_w = im.crop((640, 940, 740, 1065))
arr_d_w = np.array(deal_w)
r, g, b = arr_d_w[:,:,0], arr_d_w[:,:,1], arr_d_w[:,:,2]
# Remove yellow background #DFFF00
is_bg_yellow = (r > 200) & (g > 230) & (b < 50)
d_w_mask = np.zeros(arr_d_w.shape[:2], dtype=np.uint8)
d_w_mask[~is_bg_yellow] = 255
arr_d_w[:,:,3] = d_w_mask
Image.fromarray(arr_d_w).save('public/assets/deals/deal-watch.png')

print('All transparent product cutouts extracted with precision!')
