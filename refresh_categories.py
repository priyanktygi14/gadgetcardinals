import numpy as np
from PIL import Image

im = Image.open('reference-homepage.png').convert('RGBA')

# Crop the clean lower product portions from reference for category tiles
# 1. iPhone camera module
im.crop((168, 620, 288, 736)).save('public/assets/categories/category-iphone.png')
# 2. MacBook screen & keyboard
im.crop((298, 620, 418, 736)).save('public/assets/categories/category-macbook.png')
# 3. iPad top edge & camera
im.crop((428, 620, 548, 736)).save('public/assets/categories/category-ipad.png')
# 4. AirPods case & stem
im.crop((562, 620, 682, 736)).save('public/assets/categories/category-airpods.png')
# 5. Apple Watch body & band
im.crop((692, 620, 815, 736)).save('public/assets/categories/category-watch.png')

print('Categories assets refreshed')
