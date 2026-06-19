const defaultConfig = {
    'spawn-radius': 250,
    'spawn-world': 'world',
    'farm-worlds': ['farm'],
    'season-start': '2026-06-01 00:00:00',
    'newbie-playtime-hours': 30,
    'playtime-save-interval-seconds': 300,
    'trust-link': 'https://example.com/rules',
    'language': 'ru',
    'warning-threshold': 3,
    'warning-ban-hours': 1,
    'notify-cooldown-seconds': 3,
    'punishment-cooldown-seconds': 60,
    'database': {
        type: 'sqlite',
        sqlite: { file: 'antigrief.db' },
        mysql: {
            host: 'localhost',
            port: 3306,
            database: 'minecraft',
            username: 'root',
            password: 'password',
            'use-ssl': false,
            'pool-size': 5,
            'connection-timeout': 30000,
            'idle-timeout': 600000,
            'max-lifetime': 1800000
        }
    },
    'spawn-teleport': {
        world: 'world',
        x: 0.5,
        y: 64.0,
        z: 0.5,
        yaw: 0.0,
        pitch: 0.0
    },
    'season-events': {
        'sleeping-days': 7,
        'mid-season-day': 30,
        'late-season-day': 60
    },
    'punishments': {
        'sender-name': 'AmethystProtection',
        'warn-reason': 'Убийство новичка в зоне спавна [{phase}, день {day}, {time}]',
        'attack-reason': 'Атака новичка в зоне спавна [{phase}, день {day}, {time}]',
        'ban-reason': 'Повторные нарушения защиты новичков ({warnings}/{threshold}, {phase}, {time})'
    },
    'messages': {
        ru: {},
        en: {}
    }
};

const defaultMessages = {
    ru: {
        prefix: '[AmethystProtection]',
        reload_success: 'Конфигурация AmethystProtection перезагружена.',
        spawn_tp: 'Телепорт на спавн.',
        spawn_missing_world: 'Мир спавна не найден.',
        spawn_only_newbie: 'Эта команда доступна только новичкам.',
        spawn_only_zone: 'Телепорт доступен только из зоны спавна (250 блоков от 0,0).',
        ignore_enabled: 'Уведомления в чате скрыты. Action bar «Запрещено!» останется.',
        chat_shown: 'Сообщения в чате снова включены.',
        no_permission: 'Недостаточно прав.',
        status_phase: 'Сезонная фаза: %s',
        status_days: 'Дней с начала сезона: %s',
        status_sleeping: 'Режим сна: %s',
        status_ban_duration: 'Длительность бана: %s',
        language_invalid: 'Доступны только языки ru и en.',
        language_changed: 'Язык переключён на %s.',
        cmd_usage: 'Использование: /antigrief spawn|ignore|reload|status|language <ru|en>',
        trust_usage: 'Использование: /trust <give|remove> <player>',
        trust_give: 'Доверие выдано игроку %s.',
        trust_remove: 'Доверие снято с %s.',
        farm_world_denied: 'В мире ферм запрещены любые действия.',
        newbie_block_break: 'Запрещено ломать блоки.',
        newbie_block_place: 'Запрещено ставить блоки.',
        newbie_container_break: 'Запрещено ломать непустые контейнеры.',
        newbie_dangerous_block: 'Запрещено устанавливать опасные блоки.',
        newbie_dangerous_entity: 'Запрещено устанавливать опасные объекты.',
        newbie_ignite: 'Запрещено поджигать блоки.',
        newbie_entity_place: 'Запрещено ставить объекты в зоне спавна.',
        newbie_attack_spawn_mob: 'Запрещено наносить урон этим объектам в зоне спавна.',
        newbie_interact_entity: 'Запрещено взаимодействовать с объектами в зоне спавна.',
        newbie_interact_frame: 'Запрещено взаимодействовать с рамками в зоне спавна.',
        newbie_damage_players: 'Запрещено наносить урон игрокам.',
        newbie_attack_player: '&cЗапрещено бить человека.\n&7Это действие запрещено правилами сервера.',
        newbie_interact: 'Запрещено взаимодействовать с этим блоком.',
        actionbar_denied: 'Запрещено!',
        button_ignore: '[Игнорировать]',
        button_details: '[Подробнее]',
        button_spawn: '[Спавн]',
        button_ignore_hover: 'Скрыть уведомления',
        button_details_hover: 'Открыть правила',
        button_spawn_hover: 'Телепорт на спавн',
        warning_received: 'Вам выдано предупреждение за убийство новичка в зоне спавна.',
        ban_applied: 'Игрок временно заблокирован через LiteBans.',
        litebans_missing: 'LiteBans не установлен. Команды предупреждения и бана пропущены.'
    },
    en: {
        prefix: '[AmethystProtection]',
        reload_success: 'AmethystProtection configuration reloaded.',
        spawn_tp: 'Teleported to spawn.',
        spawn_missing_world: 'Spawn world not found.',
        spawn_only_newbie: 'This command is available only for newcomers.',
        spawn_only_zone: 'Teleport is available only from the spawn zone.',
        ignore_enabled: 'Chat notifications are hidden. Action bar will stay active.',
        chat_shown: 'Chat notifications restored.',
        no_permission: 'You do not have permission.',
        status_phase: 'Season phase: %s',
        status_days: 'Days since season start: %s',
        status_sleeping: 'Sleeping mode: %s',
        status_ban_duration: 'Ban duration: %s',
        language_invalid: 'Only ru and en are supported.',
        language_changed: 'Language switched to %s.',
        cmd_usage: 'Usage: /antigrief spawn|ignore|reload|status|language <ru|en>',
        trust_usage: 'Usage: /trust <give|remove> <player>',
        trust_give: 'Trust granted to %s.',
        trust_remove: 'Trust removed from %s.',
        farm_world_denied: 'Any actions are forbidden in the farm world.',
        newbie_block_break: 'You cannot break blocks.',
        newbie_block_place: 'You cannot place blocks.',
        newbie_container_break: 'You cannot break non-empty containers.',
        newbie_dangerous_block: 'You cannot place dangerous blocks.',
        newbie_dangerous_entity: 'You cannot place dangerous objects.',
        newbie_ignite: 'You cannot ignite blocks.',
        newbie_entity_place: 'You cannot place objects in the spawn zone.',
        newbie_attack_spawn_mob: 'You cannot damage these objects in the spawn zone.',
        newbie_interact_entity: 'You cannot interact with objects in the spawn zone.',
        newbie_interact_frame: 'You cannot interact with frames in the spawn zone.',
        newbie_damage_players: 'You cannot deal damage to players.',
        newbie_attack_player: '&cYou cannot hit a person.\n&7This action is forbidden by server rules.',
        newbie_interact: 'You cannot interact with this block.',
        actionbar_denied: 'Forbidden!',
        button_ignore: '[Ignore]',
        button_details: '[Details]',
        button_spawn: '[Spawn]',
        button_ignore_hover: 'Hide notifications',
        button_details_hover: 'Open rules',
        button_spawn_hover: 'Teleport to spawn',
        warning_received: 'You were warned for killing a newcomer in the spawn zone.',
        ban_applied: 'The player was temporarily banned via LiteBans.',
        litebans_missing: 'LiteBans is not installed. Warn/ban commands were skipped.'
    }
};

let config = JSON.parse(JSON.stringify(defaultConfig));
config.messages = JSON.parse(JSON.stringify(defaultMessages));
let currentLang = 'ru';

const minecraftColors = {
    '0': '#000000', '1': '#0000AA', '2': '#00AA00', '3': '#00AAAA',
    '4': '#AA0000', '5': '#AA00AA', '6': '#FFAA00', '7': '#AAAAAA',
    '8': '#555555', '9': '#5555FF', 'a': '#55FF55', 'b': '#55FFFF',
    'c': '#FF5555', 'd': '#FF55FF', 'e': '#FFFF55', 'f': '#FFFFFF',
    'k': 'obfuscated', 'l': 'font-weight:700', 'm': 'text-decoration:line-through',
    'n': 'text-decoration:underline', 'o': 'font-style:italic', 'r': 'reset'
};

function getValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function setValue(obj, path, value) {
    const keys = path.split('.');
    const last = keys.pop();
    const target = keys.reduce((acc, key) => {
        if (!acc[key]) acc[key] = {};
        return acc[key];
    }, obj);
    target[last] = value;
}

function updateConfigFromInputs() {
    document.querySelectorAll('[data-path]').forEach(input => {
        const path = input.dataset.path;
        let value = input.value;
        if (input.type === 'number') {
            value = input.value.includes('.') ? parseFloat(value) : parseInt(value, 10);
        } else if (input.dataset.path === 'farm-worlds') {
            value = value.split(',').map(s => s.trim()).filter(Boolean);
        } else if (input.dataset.path === 'database.mysql.use-ssl') {
            value = input.value === 'true';
        }
        setValue(config, path, value);
    });
}

function updateInputsFromConfig() {
    document.querySelectorAll('[data-path]').forEach(input => {
        const path = input.dataset.path;
        const value = getValue(config, path);
        if (path === 'farm-worlds') {
            input.value = Array.isArray(value) ? value.join(', ') : value;
        } else if (input.type === 'checkbox') {
            input.checked = value;
        } else {
            input.value = value ?? '';
        }
    });
    toggleDatabaseSettings();
}

function toggleDatabaseSettings() {
    const type = document.querySelector('[data-path="database.type"]').value;
    document.getElementById('sqlite-settings').classList.toggle('hidden', type !== 'sqlite');
    document.getElementById('mysql-settings').classList.toggle('hidden', type !== 'mysql');
}

function renderMessages() {
    const editor = document.getElementById('message-editor');
    editor.innerHTML = '';
    const allKeys = new Set([
        ...Object.keys(config.messages.ru || {}),
        ...Object.keys(config.messages.en || {})
    ]);
    Array.from(allKeys).sort().forEach(key => {
        const value = config.messages[currentLang]?.[key] ?? '';
        const row = document.createElement('div');
        row.className = 'message-row';
        row.dataset.key = key;
        row.innerHTML = `
            <code>${escapeHtml(key)}</code>
            <textarea data-key="${escapeHtml(key)}" rows="2">${escapeHtml(value)}</textarea>
        `;
        editor.appendChild(row);
    });
    updatePreviewKeys();
}

function updatePreviewKeys() {
    const select = document.getElementById('preview-key');
    if (!select) return;
    const current = select.value;
    select.innerHTML = '';
    const keys = Array.from(new Set([
        ...Object.keys(config.messages.ru || {}),
        ...Object.keys(config.messages.en || {})
    ])).sort();
    keys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        select.appendChild(option);
    });
    if (current && keys.includes(current)) select.value = current;
    updatePreview();
}

function formatPreview(template, args) {
    let i = 0;
    return template.replace(/%s/g, () => args[i++] ?? '');
}

function stripMinecraftCodes(text) {
    return text.replace(/&[0-9a-fk-or]/gi, '');
}

function renderColoredText(text) {
    const parts = text.split(/(&[0-9a-fk-or])/gi).filter(Boolean);
    let html = '';
    let currentColor = '#FFFFFF';
    let currentStyle = '';
    parts.forEach(part => {
        if (/^&[0-9a-fk-or]$/i.test(part)) {
            const code = part[1].toLowerCase();
            if (code === 'r') {
                currentColor = '#FFFFFF';
                currentStyle = '';
            } else if (minecraftColors[code] && minecraftColors[code].startsWith('#')) {
                currentColor = minecraftColors[code];
            } else if (minecraftColors[code]) {
                currentStyle = minecraftColors[code];
            }
        } else {
            let style = currentStyle ? ` style="${currentStyle};color:${currentColor}"` : ` style="color:${currentColor}"`;
            html += `<span${style}>${escapeHtml(part)}</span>`;
        }
    });
    return html || escapeHtml(text);
}

function updatePreview() {
    const key = document.getElementById('preview-key')?.value;
    const argsRaw = document.getElementById('preview-args')?.value ?? '';
    const args = argsRaw.split(',').map(s => s.trim()).filter(Boolean);
    const template = config.messages[currentLang]?.[key] ?? '';
    const formatted = formatPreview(template, args);

    const chatEl = document.getElementById('preview-chat');
    const actionEl = document.getElementById('preview-actionbar');
    const coloredEl = document.getElementById('preview-colored');
    if (chatEl) chatEl.textContent = formatted;
    if (actionEl) actionEl.textContent = stripMinecraftCodes(formatted);
    if (coloredEl) coloredEl.innerHTML = renderColoredText(formatted);
}

function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function toYaml(obj, indent = 0) {
    const spaces = '  '.repeat(indent);
    let yaml = '';
    for (const [key, value] of Object.entries(obj)) {
        const safeKey = String(key).includes(':') || String(key).includes(' ') ? `"${key}"` : key;
        if (value === null || value === undefined) {
            yaml += `${spaces}${safeKey}: null\n`;
        } else if (Array.isArray(value)) {
            if (value.length === 0) {
                yaml += `${spaces}${safeKey}: []\n`;
            } else {
                yaml += `${spaces}${safeKey}:\n`;
                value.forEach(item => {
                    yaml += `${spaces}  - ${formatYamlScalar(item)}\n`;
                });
            }
        } else if (typeof value === 'object') {
            yaml += `${spaces}${safeKey}:\n`;
            yaml += toYaml(value, indent + 1);
        } else {
            yaml += `${spaces}${safeKey}: ${formatYamlScalar(value)}\n`;
        }
    }
    return yaml;
}

function formatYamlScalar(value) {
    if (typeof value === 'boolean') return value ? 'true' : 'false';
    if (typeof value === 'number') return String(value);
    const str = String(value);
    if (str.includes('\n')) {
        return `|-\n${str.split('\n').map(line => '    ' + line).join('\n')}`;
    }
    if (str === '' || str.includes(':') || str.includes('#') || str.includes('"') || str.includes('\\') || str.startsWith(' ') || str.endsWith(' ')) {
        return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    }
    return str;
}

function updateYamlOutput() {
    document.getElementById('yaml-output').value = toYaml(config);
}

function downloadYaml() {
    const blob = new Blob([toYaml(config)], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.yml';
    a.click();
    URL.revokeObjectURL(url);
}

function parseYamlValue(value) {
    value = value.trim();
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === 'null' || value === '~') return null;
    if (/^\d+$/.test(value)) return parseInt(value, 10);
    if (/^\d+\.\d+$/.test(value)) return parseFloat(value);
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        return value.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    }
    return value;
}

function parseYaml(text) {
    const lines = text.split('\n');
    const root = {};
    const stack = [{ obj: root, indent: -1 }];
    let lastLiteral = null;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (!line.trim() || line.trim().startsWith('#')) continue;
        const indent = line.length - line.trimStart().length;
        line = line.trimEnd();

        while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
            stack.pop();
        }

        const parent = stack[stack.length - 1];

        if (lastLiteral) {
            if (indent > lastLiteral.indent) {
                lastLiteral.value += (lastLiteral.value ? '\n' : '') + line.trim();
                continue;
            }
            lastLiteral = null;
        }

        if (line.trim().startsWith('- ')) {
            const itemValue = line.trim().substring(2).trim();
            const value = parseYamlValue(itemValue);
            if (Array.isArray(parent.obj)) {
                parent.obj.push(value);
            }
            continue;
        }

        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue;
        const key = line.substring(0, colonIndex).trim().replace(/^"|"$/g, '');
        let rest = line.substring(colonIndex + 1).trim();

        if (rest === '' || rest === '[]') {
            const nextLine = lines[i + 1];
            const nextIndent = nextLine ? nextLine.length - nextLine.trimStart().length : 0;
            if (nextIndent > indent) {
                const child = {};
                parent.obj[key] = child;
                stack.push({ obj: child, indent });
            } else {
                parent.obj[key] = [];
            }
        } else if (rest === '|-') {
            parent.obj[key] = '';
            lastLiteral = { value: '', indent };
            parent.obj[key] = lastLiteral.value;
            Object.defineProperty(parent.obj, key, {
                get: () => lastLiteral.value,
                set: (v) => { lastLiteral.value = v; },
                enumerable: true,
                configurable: true
            });
        } else if (rest === '{}') {
            parent.obj[key] = {};
        } else if (rest.startsWith('[') && rest.endsWith(']')) {
            parent.obj[key] = rest.slice(1, -1).split(',').map(s => parseYamlValue(s.trim())).filter(Boolean);
        } else {
            parent.obj[key] = parseYamlValue(rest);
        }
    }
    return root;
}

function loadFromYaml(text) {
    try {
        const parsed = parseYaml(text);
        config = mergeDeep(JSON.parse(JSON.stringify(defaultConfig)), parsed);
        if (!config.messages.ru) config.messages.ru = {};
        if (!config.messages.en) config.messages.en = {};
        updateInputsFromConfig();
        renderMessages();
        updateYamlOutput();
    } catch (e) {
        alert('Ошибка парсинга YAML: ' + e.message);
    }
}

function mergeDeep(target, source) {
    if (!source || typeof source !== 'object') return target;
    for (const [key, value] of Object.entries(source)) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            if (!target[key] || typeof target[key] !== 'object') target[key] = {};
            mergeDeep(target[key], value);
        } else {
            target[key] = value;
        }
    }
    return target;
}

function syncLanguages() {
    const allKeys = new Set([
        ...Object.keys(config.messages.ru),
        ...Object.keys(config.messages.en)
    ]);
    allKeys.forEach(key => {
        if (!config.messages.ru[key]) config.messages.ru[key] = config.messages.en[key] || '';
        if (!config.messages.en[key]) config.messages.en[key] = config.messages.ru[key] || '';
    });
    renderMessages();
}

document.addEventListener('DOMContentLoaded', () => {
    initSpace();
    updateInputsFromConfig();
    renderMessages();
    updateYamlOutput();

    document.querySelectorAll('.tabs .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
            if (tab.dataset.tab === 'yaml') {
                updateConfigFromInputs();
                updateYamlOutput();
            }
        });
    });

    document.querySelectorAll('[data-path]').forEach(input => {
        input.addEventListener('input', () => {
            updateConfigFromInputs();
            if (input.dataset.path === 'database.type') toggleDatabaseSettings();
        });
    });

    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLang = tab.dataset.lang;
            renderMessages();
        });
    });

    document.getElementById('message-editor').addEventListener('input', (e) => {
        if (e.target.tagName === 'TEXTAREA') {
            const key = e.target.dataset.key;
            config.messages[currentLang][key] = e.target.value;
            updatePreview();
        }
    });

    document.getElementById('preview-key')?.addEventListener('change', updatePreview);
    document.getElementById('preview-args')?.addEventListener('input', updatePreview);

    document.getElementById('add-message').addEventListener('click', () => {
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('new-key').focus();
    });

    document.getElementById('cancel-add').addEventListener('click', () => {
        document.getElementById('modal').classList.add('hidden');
    });

    document.getElementById('confirm-add').addEventListener('click', () => {
        const key = document.getElementById('new-key').value.trim();
        if (!key) return;
        if (!config.messages.ru[key]) config.messages.ru[key] = '';
        if (!config.messages.en[key]) config.messages.en[key] = '';
        renderMessages();
        document.getElementById('modal').classList.add('hidden');
        document.getElementById('new-key').value = '';
    });

    document.getElementById('sync-messages').addEventListener('click', syncLanguages);

    document.getElementById('download-yaml').addEventListener('click', () => {
        updateConfigFromInputs();
        downloadYaml();
    });

    document.getElementById('upload-yaml').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => loadFromYaml(ev.target.result);
        reader.readAsText(file);
        e.target.value = '';
    });

    document.getElementById('reset-yaml').addEventListener('click', () => {
        if (confirm('Сбросить конфиг к значениям по умолчанию?')) {
            config = JSON.parse(JSON.stringify(defaultConfig));
            config.messages = JSON.parse(JSON.stringify(defaultMessages));
            updateInputsFromConfig();
            renderMessages();
            updateYamlOutput();
        }
    });
});

function initSpace() {
    const container = document.getElementById('space');
    if (!container) return;

    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.className = 'star-canvas';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let width, height;
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    const starCount = 120;
    const connectionDistance = 80;
    const maxConnections = 2;
    const stars = [];
    function createStar() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 1.5 + 0.5,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 2
        };
    }

    for (let i = 0; i < starCount; i++) {
        stars.push(createStar());
    }

    function updateStars() {
        stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;

            if (star.x < -50) star.x = width + 50;
            if (star.x > width + 50) star.x = -50;
            if (star.y < -50) star.y = height + 50;
            if (star.y > height + 50) star.y = -50;
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        const time = Date.now() / 1000;
        stars.forEach(star => {
            const pulse = 1 + 0.3 * Math.sin(time * star.speed + star.phase);
            const currentSize = star.size * pulse;
            const alpha = 0.6 + 0.4 * Math.sin(time * star.speed + star.phase);

            const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, currentSize * 2.5);
            grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
            grad.addColorStop(0.4, `rgba(180, 160, 255, ${alpha * 0.6})`);
            grad.addColorStop(1, 'rgba(170, 150, 255, 0)');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(star.x, star.y, currentSize * 2.5, 0, Math.PI * 2);
            ctx.fill();
        });

        for (let i = 0; i < stars.length; i++) {
            let connections = 0;
            for (let j = i + 1; j < stars.length; j++) {
                const dx = stars[i].x - stars[j].x;
                const dy = stars[i].y - stars[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < connectionDistance && connections < maxConnections) {
                    const alpha = 0.4 * (1 - dist / connectionDistance);
                    const gradient = ctx.createLinearGradient(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
                    gradient.addColorStop(0, 'rgba(170, 150, 255, 0)');
                    gradient.addColorStop(0.5, `rgba(170, 150, 255, ${alpha})`);
                    gradient.addColorStop(1, 'rgba(170, 150, 255, 0)');
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    connections++;
                }
            }
        }

        updateStars();
        requestAnimationFrame(draw);
    }

    draw();
}
