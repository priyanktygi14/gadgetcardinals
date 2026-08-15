import os

os.makedirs('public/assets/brand', exist_ok=True)
os.makedirs('public/assets/decorative', exist_ok=True)

# 1. Favicon SVG
with open('public/assets/brand/favicon.svg', 'w') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#050505"/>
  <rect x="3" y="3" width="26" height="26" rx="4" fill="#DFFF00"/>
  <path d="M9 16L16 9L23 16L16 23Z" fill="#050505"/>
  <circle cx="16" cy="16" r="3.5" fill="#6D28FF"/>
</svg>''')

# 2. Hazard Stripes SVG
with open('public/assets/decorative/hazard-stripes.svg', 'w') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <defs>
    <pattern id="hazard" width="20" height="20" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <rect width="10" height="20" fill="#DFFF00"/>
      <rect x="10" width="10" height="20" fill="#050505"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#hazard)"/>
</svg>''')

# 3. Purple Starburst Badge SVG
with open('public/assets/decorative/starburst-purple.svg', 'w') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <path d="M60 5 L68 18 L83 15 L88 30 L103 33 L102 48 L115 56 L108 70 L118 82 L106 91 L110 106 L95 109 L92 124 L77 120 L70 133 L56 123 L45 133 L38 120 L23 124 L20 109 L5 106 L9 91 L-3 82 L7 70 L0 56 L13 48 L12 33 L27 30 L32 15 L47 18 Z" fill="#6D28FF" transform="scale(0.85) translate(10, 5)"/>
  <text x="60" y="50" fill="#FFFFFF" font-family="'Bebas Neue', 'Anton', sans-serif" font-size="14" font-weight="900" text-anchor="middle" letter-spacing="1.5">CRAZY</text>
  <text x="60" y="65" fill="#FFFFFF" font-family="'Bebas Neue', 'Anton', sans-serif" font-size="14" font-weight="900" text-anchor="middle" letter-spacing="1.5">DEALS</text>
  <text x="60" y="78" fill="#FFFFFF" font-family="'Bebas Neue', 'Anton', sans-serif" font-size="11" font-weight="900" text-anchor="middle" letter-spacing="1">INSIDE</text>
</svg>''')

# 4. Orange Discount Badge (-35%)
with open('public/assets/decorative/badge-35.svg', 'w') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <polygon points="30,2 37,11 48,8 51,19 60,22 57,33 63,42 54,49 55,60 44,61 40,71 29,66 22,74 17,64 6,64 9,53 1,46 8,36 3,26 13,22 13,11 24,12" fill="#FF7A00" transform="scale(0.75) translate(8, 6)"/>
  <text x="30" y="35" fill="#FFFFFF" font-family="'Anton', sans-serif" font-size="15" font-weight="900" text-anchor="middle">-35%</text>
</svg>''')

# 5. Yellow Discount Badge (-33%)
with open('public/assets/decorative/badge-33.svg', 'w') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <polygon points="30,2 37,11 48,8 51,19 60,22 57,33 63,42 54,49 55,60 44,61 40,71 29,66 22,74 17,64 6,64 9,53 1,46 8,36 3,26 13,22 13,11 24,12" fill="#DFFF00" transform="scale(0.75) translate(8, 6)"/>
  <text x="30" y="35" fill="#050505" font-family="'Anton', sans-serif" font-size="15" font-weight="900" text-anchor="middle">-33%</text>
</svg>''')

# 6. Yellow Discount Badge (-38%)
with open('public/assets/decorative/badge-38.svg', 'w') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <polygon points="30,2 37,11 48,8 51,19 60,22 57,33 63,42 54,49 55,60 44,61 40,71 29,66 22,74 17,64 6,64 9,53 1,46 8,36 3,26 13,22 13,11 24,12" fill="#DFFF00" transform="scale(0.75) translate(8, 6)"/>
  <text x="30" y="35" fill="#050505" font-family="'Anton', sans-serif" font-size="15" font-weight="900" text-anchor="middle">-38%</text>
</svg>''')

# 7. Soundwave / Squiggly SVG
with open('public/assets/decorative/soundwave.svg', 'w') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" width="100" height="24" fill="none">
  <path d="M2 12 C 10 2, 18 22, 28 12 C 38 2, 46 22, 56 12 C 66 2, 74 22, 84 12 C 90 6, 94 16, 98 12" stroke="#050505" stroke-width="2.5" stroke-linecap="round" fill="none"/>
</svg>''')

print('SVGs created successfully!')
