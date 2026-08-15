import numpy as np
from PIL import Image, ImageDraw, ImageFilter

im = Image.open('reference-homepage.png').convert('RGBA')

def create_masked_cutout(crop_box, polygon_pts_abs, output_path, blur_radius=0.7):
    x1, y1, x2, y2 = crop_box
    crop = im.crop((x1, y1, x2, y2))
    
    scale = 4
    mask_canvas = Image.new('L', (crop.width * scale, crop.height * scale), 0)
    draw = ImageDraw.Draw(mask_canvas)
    
    # Map absolute points to crop coordinates and scale
    scaled_pts = [((px - x1) * scale, (py - y1) * scale) for px, py in polygon_pts_abs]
    draw.polygon(scaled_pts, fill=255)
    
    # Downsample for subpixel anti-aliasing
    mask_aa = mask_canvas.resize((crop.width, crop.height), Image.Resampling.LANCZOS)
    if blur_radius > 0:
        mask_aa = mask_aa.filter(ImageFilter.GaussianBlur(blur_radius))
        
    arr = np.array(crop)
    arr[:,:,3] = np.array(mask_aa)
    result = Image.fromarray(arr)
    result.save(output_path)
    print(f'Saved clean cutout to {output_path}')

# 1. Hero iPhone
iphone_poly = [
    (485, 74), (525, 82), (645, 107), (656, 112), (665, 122), (674, 137),
    (690, 165), (692, 185), (685, 235), (673, 290), (655, 345), (630, 395),
    (595, 440), (555, 475), (540, 481), (520, 480), (508, 470), (480, 380),
    (465, 300), (455, 230), (456, 180), (464, 120), (472, 90), (480, 77)
]
create_masked_cutout((445, 70, 700, 485), iphone_poly, 'public/assets/hero/iphone-purple-hero.png')

# 2. Hero AirPods
airpods_poly = [
    (410, 240), (470, 240), (515, 260), (525, 280), (510, 320),
    (495, 365), (430, 370), (390, 340), (385, 290), (395, 260)
]
create_masked_cutout((380, 235, 530, 375), airpods_poly, 'public/assets/hero/airpods-hero.png')

# 3. Hero Apple Watch
watch_poly = [
    (710, 270), (780, 275), (840, 310), (845, 380), (830, 450),
    (790, 500), (720, 505), (660, 475), (635, 410), (635, 340), (660, 290)
]
create_masked_cutout((630, 265, 850, 510), watch_poly, 'public/assets/hero/watch-hero.png')

# 4. Deal 1: AirPods Pro 2
deal_ap_poly = [
    (310, 965), (370, 960), (415, 980), (420, 1020), (395, 1060),
    (335, 1060), (305, 1030), (305, 990)
]
create_masked_cutout((300, 955, 425, 1065), deal_ap_poly, 'public/assets/deals/deal-airpods.png')

# 5. Deal 2: iPhone 14 Pro Max (Deep Purple Front & Back)
deal_ip_poly = [
    (465, 910), (530, 910), (580, 915), (595, 940), (595, 1050),
    (575, 1085), (510, 1085), (460, 1060), (450, 1010), (450, 935)
]
create_masked_cutout((445, 905, 600, 1090), deal_ip_poly, 'public/assets/deals/deal-iphone.png')

# 6. Deal 3: Apple Watch Series 8
deal_w_poly = [
    (670, 940), (715, 940), (745, 970), (745, 1035), (715, 1070),
    (665, 1070), (640, 1030), (640, 970)
]
create_masked_cutout((635, 935, 750, 1075), deal_w_poly, 'public/assets/deals/deal-watch.png')

print('All assets masked cleanly and accurately!')
