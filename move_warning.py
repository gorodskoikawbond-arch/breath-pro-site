with open('index.html', 'r') as f:
    content = f.read()

start = content.find('<!-- Предупреждение -->')
end = content.find('</section>', start) + len('</section>')
warning_block = content[start:end]

content = content[:start] + content[end:]

insert_pos = content.find('<!-- Финал -->')
content = content[:insert_pos] + warning_block + '\n\n    ' + content[insert_pos:]

with open('index.html', 'w') as f:
    f.write(content)

print('Готово!')
PYEOFcat > ~/breath-pro-site/move_warning.py << 'PYEOF'
with open('index.html', 'r') as f:
    content = f.read()

start = content.find('<!-- Предупреждение -->')
end = content.find('</section>', start) + len('</section>')
warning_block = content[start:end]

content = content[:start] + content[end:]

insert_pos = content.find('<!-- Финал -->')
content = content[:insert_pos] + warning_block + '\n\n    ' + content[insert_pos:]

with open('index.html', 'w') as f:
    f.write(content)

print('Готово!')
