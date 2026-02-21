with open('index.html', 'r') as f:
    content = f.read()

old_styles = '''.screenshots { padding: 80px 0; background: #0a0a0a; }
.section-sub { text-align: center; color: #888; margin-bottom: 48px; font-size: 1.1rem; }
.screens-grid { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; }
.screen-item { text-align: center; }
.screen-item img { width: 220px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
.screen-item p { margin-top: 16px; color: #888; font-size: 0.9rem; }'''

new_styles = '''.screenshots { padding: 80px 0; background: #0a0a0a; }
.section-sub { text-align: center; color: #888; margin-bottom: 48px; font-size: 1.1rem; }
.screens-grid { display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: nowrap; }
.screen-item { text-align: center; flex: 0 0 auto; }
.screen-item img { width: 160px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); display: block; }
.screen-item p { margin-top: 12px; color: #888; font-size: 0.85rem; }'''

content = content.replace(old_styles, new_styles)

with open('index.html', 'w') as f:
    f.write(content)

print('Размер исправлен!')