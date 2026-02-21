with open('index.html', 'r') as f:
    content = f.read()

# Заменяем весь блок скриншотов
old_block_start = content.find('<!-- Скриншоты -->')
old_block_end = content.find('</section>', old_block_start) + len('</section>')

new_block = '''<!-- Скриншоты -->
    <section class="screenshots">
        <div class="container">
            <h2 class="section-title">Простой и красивый интерфейс</h2>
            <p class="section-sub">Всё интуитивно понятно с первого запуска — никаких лишних кнопок, только практика</p>
            <div class="screens-grid">
                <div class="screen-item">
                    <img src="screen1.png" alt="Выбор техники">
                    <p>Выбор техники дыхания</p>
                </div>
                <div class="screen-item">
                    <img src="screen2.png" alt="Практика">
                    <p>Визуальный гид дыхания</p>
                </div>
                <div class="screen-item">
                    <img src="screen3.png" alt="Настройки">
                    <p>Гибкие настройки</p>
                </div>
            </div>
        </div>
    </section>'''

content = content[:old_block_start] + new_block + content[old_block_end:]

# Исправляем стили
old_styles = '''.screenshots { padding: 80px 0; background: #0a0a0a; }
.section-sub { text-align: center; color: #888; margin-bottom: 48px; font-size: 1.1rem; }
.screens-grid { display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: nowrap; }
.screen-item { text-align: center; flex: 0 0 auto; }
.screen-item img { width: 160px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); display: block; }
.screen-item p { margin-top: 12px; color: #888; font-size: 0.85rem; }'''

new_styles = '''.screenshots { padding: 80px 0; background: #111; }
.section-sub { text-align: center; color: #888; margin-bottom: 48px; font-size: 1.1rem; }
.screens-grid { display: flex; flex-direction: row; gap: 24px; justify-content: center; align-items: flex-start; }
.screen-item { text-align: center; flex: 0 0 auto; }
.screen-item img { width: 180px; height: auto; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.6); display: block; }
.screen-item p { margin-top: 12px; color: #888; font-size: 0.85rem; }'''

content = content.replace(old_styles, new_styles)

with open('index.html', 'w') as f:
    f.write(content)

print('Готово!')