const defaultConfig = {
    'spawn-radius': 250,
    'spawn-world': 'world',
    'farm-worlds': ['farm'],
    'season-start': '2026-06-01 00:00:00',
    'newbie-playtime-hours': 30,
    'newbie-restrict-only-spawn-and-farm': true,
    'playtime-save-interval-seconds': 300,
    'dirty-flush-interval-seconds': 60,
    'trust-link': 'https://example.com/rules',
    'language': 'ru',
    'warning-threshold': 3,
    'warning-ban-hours': 1,
    'notify-cooldown-seconds': 3,
    'punishment-cooldown-seconds': 60,
    'database': {
        type: 'sqlite',
        sqlite: {
            file: 'antigrief.db',
            'pool-size': 2,
            'max-lifetime': 600000
        },
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
        'late-season-day': 60,
        'early-ban-immediately': true,
        'mid-threshold': 3,
        'late-threshold': 6
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
        newbie_cannot_kill: 'Новички не могут убивать игроков.',
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
        newbie_cannot_kill: 'Newcomers cannot kill players.',
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
        } else if (input.dataset.path === 'database.mysql.use-ssl' || input.dataset.path === 'season-events.early-ban-immediately') {
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
    initThemeSwitcher();
    initTabGenerator();
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

    container.innerHTML = '<canvas id="gearCanvas" class="gear-canvas"></canvas><canvas id="circuitCanvas" class="circuit-canvas"></canvas>';
    const canvas = document.createElement('canvas');
    canvas.className = 'star-canvas';
    container.insertBefore(canvas, container.firstChild);
    const ctx = canvas.getContext('2d');

    initGearCanvas();
    initCircuitCanvas();

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
    const isCore = () => document.body.classList.contains('theme-core');
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

        const core = isCore();
        if (core) {
            updateStars();
            requestAnimationFrame(draw);
            return;
        }

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

function initGearCanvas() {
    const canvas = document.getElementById('gearCanvas');
    if (!canvas) return;
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

    const gears = [];
    const gearCount = 6;
    for (let i = 0; i < gearCount; i++) {
        gears.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: 40 + Math.random() * 80,
            teeth: 8 + Math.floor(Math.random() * 8),
            speed: (Math.random() - 0.5) * 0.01,
            angle: Math.random() * Math.PI * 2,
            opacity: 0.08 + Math.random() * 0.12
        });
    }

    function drawGear(g) {
        ctx.save();
        ctx.translate(g.x, g.y);
        ctx.rotate(g.angle);
        ctx.globalAlpha = g.opacity;
        ctx.strokeStyle = '#0aa6ed';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';

        const outerRadius = g.radius;
        const innerRadius = g.radius * 0.70;
        const holeRadius = g.radius * 0.22;
        const teeth = g.teeth;
        const step = Math.PI * 2 / teeth;
        const toothWidth = step * 0.42;
        const baseWidth = step - toothWidth;
        const toothDepth = g.radius * 0.22;
        const baseRadius = outerRadius - toothDepth;

        function polar(angle, radius) {
            return {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            };
        }

        ctx.beginPath();
        for (let i = 0; i < teeth; i++) {
            const toothCenter = i * step;
            const leftRoot = toothCenter - baseWidth / 2;
            const leftFlank = toothCenter - toothWidth / 2;
            const topLeft = toothCenter - toothWidth * 0.35;
            const topRight = toothCenter + toothWidth * 0.35;
            const rightFlank = toothCenter + toothWidth / 2;
            const rightRoot = toothCenter + baseWidth / 2;

            const p1 = polar(leftRoot, baseRadius);
            const p2 = polar(leftFlank, baseRadius);
            const p3 = polar(topLeft, outerRadius);
            const p4 = polar(topRight, outerRadius);
            const p5 = polar(rightFlank, baseRadius);
            const p6 = polar(rightRoot, baseRadius);

            if (i === 0) ctx.moveTo(p1.x, p1.y);
            else ctx.lineTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.lineTo(p5.x, p5.y);
            ctx.lineTo(p6.x, p6.y);
        }
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, holeRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        const isCore = document.body.classList.contains('theme-core');
        if (!isCore) {
            requestAnimationFrame(draw);
            return;
        }
        gears.forEach(g => {
            g.angle += g.speed;
            g.x += Math.sin(Date.now() / 3000 + g.radius) * 0.2;
            g.y += Math.cos(Date.now() / 4000 + g.radius) * 0.2;
            if (g.x < -g.radius) g.x = width + g.radius;
            if (g.x > width + g.radius) g.x = -g.radius;
            if (g.y < -g.radius) g.y = height + g.radius;
            if (g.y > height + g.radius) g.y = -g.radius;
            drawGear(g);
        });
        requestAnimationFrame(draw);
    }
    draw();
}

function initCircuitCanvas() {
    const canvas = document.getElementById('circuitCanvas');
    if (!canvas) return;
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

    const totalComponents = 22;
    const components = [];
    const center = { x: width * 0.5, y: height * 0.50 };
    const cpuSize = 62;

    const gridRows = 4;
    const gridCols = 6;
    const cellW = (width - 80) / gridCols;
    const cellH = (height - 80) / gridRows;
    const gridCells = [];
    for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
            const gx = 40 + c * cellW + cellW / 2;
            const gy = 40 + r * cellH + cellH / 2;
            if (Math.hypot(gx - center.x, gy - center.y) > cpuSize + 60) {
                gridCells.push({ x: gx, y: gy });
            }
        }
    }

    const cpuPins = [];
    const pinsPerSide = 6;
    for (let side = 0; side < 4; side++) {
        for (let i = 0; i < pinsPerSide; i++) {
            const t = (i + 1) / (pinsPerSide + 1);
            let px, py, dx = 0, dy = 0;
            if (side === 0) { px = center.x - cpuSize + t * cpuSize * 2; py = center.y - cpuSize; dy = -1; }
            else if (side === 1) { px = center.x + cpuSize; py = center.y - cpuSize + t * cpuSize * 2; dx = 1; }
            else if (side === 2) { px = center.x - cpuSize + t * cpuSize * 2; py = center.y + cpuSize; dy = 1; }
            else { px = center.x - cpuSize; py = center.y - cpuSize + t * cpuSize * 2; dx = -1; }
            cpuPins.push({ x: px + dx * 8, y: py + dy * 8, ox: px, oy: py, dx, dy });
        }
    }

    function randomPos() {
        let x, y, d;
        let attempts = 0;
        const margin = 40;
        const minDist = cpuSize + 70;
        do {
            x = margin + Math.random() * (width - margin * 2);
            y = margin + Math.random() * (height - margin * 2);
            d = Math.hypot(x - center.x, y - center.y);
            attempts++;
        } while (d < minDist && attempts < 300);
        return { x, y };
    }

    function randomGridPos() {
        if (gridCells.length === 0) return randomPos();
        const idx = Math.floor(Math.random() * gridCells.length);
        const cell = gridCells[idx];
        gridCells.splice(idx, 1);
        return {
            x: cell.x + (Math.random() - 0.5) * cellW * 0.5,
            y: cell.y + (Math.random() - 0.5) * cellH * 0.5
        };
    }

    for (let i = 0; i < totalComponents; i++) {
        const pos = randomGridPos();
        const type = i < 5 ? 'transistor' : (i < 10 ? 'chip' : 'node');
        const pin = cpuPins[i % cpuPins.length];
        components.push({
            x: pos.x,
            y: pos.y,
            w: type === 'chip' ? 34 + Math.random() * 36 : (type === 'transistor' ? 32 : 12),
            h: type === 'chip' ? 22 + Math.random() * 20 : (type === 'transistor' ? 28 : 12),
            type,
            pins: type === 'chip' ? 4 + Math.floor(Math.random() * 4) : 0,
            opacity: 0.08 + Math.random() * 0.12,
            pulse: Math.random() * Math.PI * 2,
            cpuPin: pin,
            layer: 0.2 + Math.random() * 0.8
        });
    }

    function drawTransistor(c) {
        ctx.save();
        ctx.globalAlpha = c.opacity;
        ctx.strokeStyle = '#0aa6ed';
        ctx.lineWidth = 1.5;
        const w = c.w;
        const h = c.h;
        const leg = 7;

        ctx.beginPath();
        ctx.moveTo(c.x - w / 2, c.y - h / 2 - leg);
        ctx.lineTo(c.x - w / 2, c.y - h / 2);
        ctx.lineTo(c.x + w / 2, c.y - h / 2);
        ctx.lineTo(c.x + w / 2, c.y - h / 2 - leg);
        ctx.moveTo(c.x - w / 2, c.y + h / 2 + leg);
        ctx.lineTo(c.x - w / 2, c.y + h / 2);
        ctx.lineTo(c.x + w / 2, c.y + h / 2);
        ctx.lineTo(c.x + w / 2, c.y + h / 2 + leg);
        ctx.stroke();

        ctx.strokeRect(c.x - w / 2, c.y - h / 2, w, h);

        ctx.beginPath();
        ctx.arc(c.x - w / 2 + 4, c.y - h / 2 + 4, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#0aa6ed';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(c.x - w / 2 + 6, c.y - 2);
        ctx.lineTo(c.x + w / 2 - 4, c.y - 2);
        ctx.moveTo(c.x - w / 2 + 6, c.y + 3);
        ctx.lineTo(c.x + w / 2 - 4, c.y + 3);
        ctx.stroke();

        ctx.restore();
    }

    function drawChip(c) {
        ctx.save();
        ctx.globalAlpha = c.opacity;
        ctx.strokeStyle = '#0aa6ed';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(c.x - c.w / 2, c.y - c.h / 2, c.w, c.h);
        const pinSize = 4;
        for (let i = 0; i < c.pins; i++) {
            const px = c.x - c.w / 2 + (c.w / (c.pins + 1)) * (i + 1);
            ctx.beginPath();
            ctx.moveTo(px, c.y - c.h / 2);
            ctx.lineTo(px, c.y - c.h / 2 - pinSize);
            ctx.moveTo(px, c.y + c.h / 2);
            ctx.lineTo(px, c.y + c.h / 2 + pinSize);
            ctx.stroke();
        }
        const glow = 0.4 + 0.3 * Math.sin(Date.now() / 500 + c.pulse);
        ctx.fillStyle = `rgba(10, 166, 237, ${glow * 0.15})`;
        ctx.fillRect(c.x - c.w / 2 + 4, c.y - c.h / 2 + 4, c.w - 8, c.h - 8);
        ctx.restore();
    }

    function drawNode(c) {
        ctx.save();
        ctx.globalAlpha = c.opacity + 0.15;
        ctx.fillStyle = '#0aa6ed';
        ctx.beginPath();
        ctx.arc(c.x, c.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0aa6ed';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    function drawCPU() {
        const time = Date.now() / 1000;
        const glow = 0.5 + 0.3 * Math.sin(time * 2);
        ctx.save();
        ctx.globalAlpha = 0.20 + glow * 0.12;
        ctx.strokeStyle = '#0aa6ed';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(center.x - cpuSize, center.y - cpuSize, cpuSize * 2, cpuSize * 2);
        ctx.fillStyle = `rgba(10, 166, 237, ${0.06 + glow * 0.06})`;
        ctx.fillRect(center.x - cpuSize + 4, center.y - cpuSize + 4, cpuSize * 2 - 8, cpuSize * 2 - 8);

        ctx.fillStyle = `rgba(10, 166, 237, ${0.5 + glow * 0.25})`;
        ctx.beginPath();
        ctx.arc(center.x, center.y, cpuSize * 0.45, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '700 12px Segoe UI, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#050810';
        ctx.fillText('CORE', center.x, center.y - 5);
        ctx.font = '400 9px Segoe UI, sans-serif';
        ctx.fillText('CPU', center.x, center.y + 7);

        ctx.globalAlpha = 0.55 + glow * 0.2;
        ctx.lineWidth = 1.5;
        cpuPins.forEach(pin => {
            ctx.beginPath();
            ctx.moveTo(pin.ox, pin.oy);
            ctx.lineTo(pin.x, pin.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(pin.x, pin.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#0aa6ed';
            ctx.fill();
        });
        ctx.restore();
    }

    function drawTrace(startX, startY, endX, endY, alpha = 0.09, offset = 0) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = '#0aa6ed';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([5, 8]);
        const dashOffset = -((Date.now() / 40 + offset) % 13);
        ctx.lineDashOffset = dashOffset;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        const midX = (startX + endX) / 2;
        ctx.lineTo(midX, startY);
        ctx.lineTo(midX, endY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        const isCore = document.body.classList.contains('theme-core');
        if (!isCore) {
            requestAnimationFrame(draw);
            return;
        }
        center.x = width * 0.5;
        center.y = height * 0.50;

        components.forEach((c, i) => {
            c.cpuPin = cpuPins[i % cpuPins.length];
        });

        drawCPU();

        components.forEach((c, i) => {
            if (c.type === 'transistor') drawTransistor(c);
            else if (c.type === 'chip') drawChip(c);
            else drawNode(c);
        });

        components.forEach((c, i) => {
            const startX = c.x;
            const startY = c.y;
            const endX = c.cpuPin.x;
            const endY = c.cpuPin.y;
            const alpha = 0.06 + c.layer * 0.07;
            drawTrace(startX, startY, endX, endY, alpha, i * 7);
        });

        components.forEach((c, i) => {
            const next = components[(i + 1) % components.length];
            drawTrace(c.x, c.y, next.x, next.y, 0.04, i * 11);
            const far = components[(i + 5) % components.length];
            drawTrace(c.x, c.y, far.x, far.y, 0.03, i * 17);
        });

        requestAnimationFrame(draw);
    }
    draw();
}

function initThemeSwitcher() {
    const saved = localStorage.getItem('amethyst-theme') || 'amethyst';
    setTheme(saved, false);

    const toggle = document.getElementById('theme-toggle');
    const menu = document.getElementById('theme-menu');

    toggle?.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden', isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
        toggle.classList.toggle('open', !isOpen);
    });

    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            setTheme(theme);
            localStorage.setItem('amethyst-theme', theme);
            menu.classList.add('hidden');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (!toggle || !menu || toggle.contains(e.target) || menu.contains(e.target)) return;
        menu.classList.add('hidden');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
}

function setTheme(theme, save = true) {
    document.body.classList.toggle('theme-core', theme === 'core');
    const label = theme === 'core' ? 'Core' : 'Amethyst';
    const currentLabel = document.getElementById('theme-current');
    if (currentLabel) currentLabel.textContent = label;
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    if (save) localStorage.setItem('amethyst-theme', theme);
}

function initTabGenerator() {
    const colorCountInput = document.getElementById('tab-color-count');
    const colorsContainer = document.getElementById('tab-colors');
    const generateBtn = document.getElementById('generate-tab');
    const downloadBtn = document.getElementById('download-tab');
    const output = document.getElementById('tab-output');
    const typeSelect = document.getElementById('tab-animation-type');
    const textInput = document.getElementById('tab-text');
    const intervalInput = document.getElementById('tab-interval');
    const formatCheckboxes = document.querySelectorAll('#tab-formats input[type="checkbox"]');

    if (!colorCountInput || !colorsContainer || !generateBtn || !output) return;

    const magicChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const MAGIC_INTERVAL = 50;
    let magicInterval = null;

    function getActiveFormats() {
        return Array.from(formatCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    }

    function buildFormatPrefix() {
        return getActiveFormats().map(code => `&${code}`).join('');
    }

    function buildFormatStyle() {
        const styles = [];
        const codes = getActiveFormats();
        if (codes.includes('l')) styles.push('font-weight:700');
        if (codes.includes('o')) styles.push('font-style:italic');
        const decorations = [];
        if (codes.includes('n')) decorations.push('underline');
        if (codes.includes('m')) decorations.push('line-through');
        if (decorations.length) styles.push(`text-decoration:${decorations.join(' ')}`);
        return styles.join(';');
    }

    function randomChar() {
        return magicChars[Math.floor(Math.random() * magicChars.length)];
    }

    function startMagicAnimation(container, renderHtml) {
        if (magicInterval) clearInterval(magicInterval);
        if (!getActiveFormats().includes('k')) return;
        const text = textInput.value || 'YourServer';
        magicInterval = setInterval(() => {
            const scrambled = Array.from(text).map(randomChar).join('');
            container.innerHTML = renderHtml(scrambled);
        }, MAGIC_INTERVAL);
    }

    function stopMagicAnimation() {
        if (magicInterval) {
            clearInterval(magicInterval);
            magicInterval = null;
        }
    }

    const defaultPalette = ['#00F5FF', '#20F6FF', '#40F8FF', '#60F9FF', '#80FAFF', '#9FFBFF', '#BFFDFF', '#DFFEFF', '#FFFFFF', '#FF5555', '#55FF55', '#5555FF', '#FFFF55', '#FF55FF', '#55FFFF', '#FFAA00', '#AA00AA', '#00AAAA', '#AA0000', '#0000AA', '#00AA00', '#00AAAA', '#AAAAAA', '#555555', '#FF55FF', '#55FF55', '#FF5555', '#AA55FF', '#55AAFF', '#FFAA55', '#55FFAA', '#AAFF55'];
    const STORAGE_KEY = 'amethyst-tab-colors';

    function loadSavedColors() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') return null;
            const count = parseInt(parsed.count, 10);
            if (Number.isNaN(count) || count < 2 || count > 32) return null;
            const colors = Array.isArray(parsed.colors) ? parsed.colors.filter(c => /^#[0-9A-Fa-f]{6}$/.test(c)) : [];
            return { count, colors };
        } catch (e) {
            return null;
        }
    }

    function saveColors() {
        try {
            const count = parseInt(colorCountInput.value, 10) || 5;
            const colors = Array.from(colorsContainer.querySelectorAll('input[type="color"]')).map(i => i.value);
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ count, colors }));
        } catch (e) {
            // ignore storage errors
        }
    }

    function renderColorInputs(savedColors) {
        let count = parseInt(colorCountInput.value, 10);
        if (Number.isNaN(count)) count = 2;
        count = Math.max(2, Math.min(32, count));
        colorCountInput.value = count;
        const current = Array.from(colorsContainer.querySelectorAll('input[type="color"]')).map(i => i.value);
        colorsContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'tab-color-item';
            const input = document.createElement('input');
            input.type = 'color';
            input.value = savedColors?.[i] || current[i] || defaultPalette[i % defaultPalette.length];
            const label = document.createElement('span');
            label.textContent = `Цвет ${i + 1}`;
            wrapper.appendChild(input);
            wrapper.appendChild(label);
            colorsContainer.appendChild(wrapper);
        }
    }

    function getColors() {
        return Array.from(colorsContainer.querySelectorAll('input[type="color"]')).map(i => i.value.replace('#', '').toUpperCase());
    }

    function colorAt(colors, index) {
        const n = colors.length;
        return colors[((index % n) + n) % n];
    }

    function hexToRgb(hex) {
        const v = hex.replace('#', '');
        return {
            r: parseInt(v.substring(0, 2), 16),
            g: parseInt(v.substring(2, 4), 16),
            b: parseInt(v.substring(4, 6), 16)
        };
    }

    function rgbToHex(r, g, b) {
        return [r, g, b].map(c => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0')).join('').toUpperCase();
    }

    function interpolateColor(c1, c2, t) {
        return rgbToHex(
            c1.r + (c2.r - c1.r) * t,
            c1.g + (c2.g - c1.g) * t,
            c1.b + (c2.b - c1.b) * t
        );
    }

    function expandColors(colors, targetCount) {
        if (colors.length >= targetCount) return colors;
        const result = [];
        const segments = colors.length - 1;
        const stepsPerSegment = Math.max(1, Math.ceil((targetCount - 1) / segments));
        const totalNeeded = segments * stepsPerSegment + 1;
        for (let i = 0; i < segments; i++) {
            const c1 = hexToRgb(colors[i]);
            const c2 = hexToRgb(colors[i + 1]);
            for (let s = 0; s < stepsPerSegment; s++) {
                const t = s / stepsPerSegment;
                result.push(interpolateColor(c1, c2, t));
            }
        }
        result.push(colors[colors.length - 1]);
        return result.slice(0, targetCount);
    }

    function makeFrame(text, colors, offset) {
        const prefix = buildFormatPrefix();
        return Array.from(text).map((ch, i) => {
            const color = colorAt(colors, i + offset);
            return `&#${color}${prefix}${ch}`;
        }).join('');
    }

    function generateFrames(type, text, colors) {
        const n = colors.length;
        const frames = [];
        if (type === 'normal') {
            for (let offset = 0; offset < n; offset++) frames.push(makeFrame(text, colors, offset));
        } else if (type === 'reversed') {
            for (let offset = 0; offset < n; offset++) frames.push(makeFrame(text, colors, -offset));
        } else if (type === 'bounce') {
            for (let offset = 0; offset < n; offset++) frames.push(makeFrame(text, colors, offset));
            for (let offset = n - 2; offset > 0; offset--) frames.push(makeFrame(text, colors, offset));
        } else if (type === 'ease-in-out') {
            const maxOffset = n - 1;
            const steps = Math.max(n * 4, 40);
            for (let s = 0; s <= steps; s++) {
                const t = s / steps;
                let offset;
                if (t <= 0.5) {
                    const u = 2 * t;
                    offset = maxOffset * (1 - Math.pow(1 - u, 3));
                } else {
                    const u = 2 * (t - 0.5);
                    offset = maxOffset * (1 - Math.pow(u, 3));
                }
                frames.push(makeFrame(text, colors, Math.round(offset)));
            }
        } else if (type === 'fullcycle') {
            const prefix = buildFormatPrefix();
            for (let offset = 0; offset < n; offset++) {
                const color = colors[offset];
                frames.push(Array.from(text).map(ch => `&#${color}${prefix}${ch}`).join(''));
            }
            for (let offset = n - 2; offset > 0; offset--) {
                const color = colors[offset];
                frames.push(Array.from(text).map(ch => `&#${color}${prefix}${ch}`).join(''));
            }
        } else if (type === 'edges-left') {
            const center = Math.floor(text.length / 2);
            const maxOffset = Math.max(1, Math.floor(n / 2));
            const prefix = buildFormatPrefix();
            for (let offset = 0; offset <= maxOffset; offset++) {
                frames.push(Array.from(text).map((ch, i) => {
                    const color = i < center ? colorAt(colors, i + offset) : colors[center % n];
                    return `&#${color}${prefix}${ch}`;
                }).join(''));
            }
            for (let offset = maxOffset - 1; offset >= 0; offset--) {
                frames.push(Array.from(text).map((ch, i) => {
                    const color = i < center ? colorAt(colors, i + offset) : colors[center % n];
                    return `&#${color}${prefix}${ch}`;
                }).join(''));
            }
        } else if (type === 'edges-right') {
            const center = Math.floor(text.length / 2);
            const maxOffset = Math.max(1, Math.floor(n / 2));
            const prefix = buildFormatPrefix();
            for (let offset = 0; offset <= maxOffset; offset++) {
                frames.push(Array.from(text).map((ch, i) => {
                    const color = i >= center ? colorAt(colors, i - offset) : colors[center % n];
                    return `&#${color}${prefix}${ch}`;
                }).join(''));
            }
            for (let offset = maxOffset - 1; offset >= 0; offset--) {
                frames.push(Array.from(text).map((ch, i) => {
                    const color = i >= center ? colorAt(colors, i - offset) : colors[center % n];
                    return `&#${color}${prefix}${ch}`;
                }).join(''));
            }
        }
        return frames;
    }

    let previewInterval = null;

    function parseFrameToHtml(frame, scrambledText) {
        const formatStyle = buildFormatStyle();
        const parts = frame.split(/(?=&#)/);
        const chars = scrambledText ? Array.from(scrambledText) : null;
        return parts.map((part, i) => {
            const match = part.match(/^&#([0-9A-Fa-f]{6})((?:&[klnom]){0,5})(.)$/);
            if (!match) return escapeHtml(part);
            const color = match[1].toUpperCase();
            const char = chars ? escapeHtml(chars[i] || randomChar()) : escapeHtml(match[3]);
            let style = `color:#${color}`;
            if (formatStyle) style += `;${formatStyle}`;
            const isMagic = getActiveFormats().includes('k');
            if (isMagic) {
                return `<span class="magic-char" style="${style}">${char}</span>`;
            }
            return `<span style="${style}">${char}</span>`;
        }).join('');
    }

    function escapeHtml(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function startPreview(frames, interval) {
        if (previewInterval) clearInterval(previewInterval);
        stopMagicAnimation();
        const preview = document.getElementById('tab-preview');
        if (!preview || frames.length === 0) return;
        let frameIndex = 0;
        const isMagic = getActiveFormats().includes('k');
        preview.innerHTML = parseFrameToHtml(frames[0]);
        if (isMagic) {
            startMagicAnimation(preview, (scrambledText) => parseFrameToHtml(frames[frameIndex], scrambledText));
        }
        previewInterval = setInterval(() => {
            frameIndex = (frameIndex + 1) % frames.length;
            if (isMagic) {
                preview.innerHTML = parseFrameToHtml(frames[frameIndex], Array.from(textInput.value || 'YourServer').map(randomChar).join(''));
            } else {
                preview.innerHTML = parseFrameToHtml(frames[frameIndex]);
            }
        }, interval);
    }

    function generate() {
        const text = textInput.value || 'YourServer';
        const rawColors = getColors();
        const type = typeSelect.value;
        const interval = parseInt(intervalInput.value, 10) || 50;
        const colors = expandColors(rawColors, Math.max(rawColors.length, text.length));
        const frames = generateFrames(type, text, colors);
        const yaml = `logo:\n  change-interval: ${interval}\n  texts:\n${frames.map(f => `  - "${f}"`).join('\n')}`;
        output.value = yaml;
        startPreview(frames, interval);
    }

    function download() {
        const blob = new Blob([output.value], { type: 'text/yaml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'tab.yml';
        a.click();
        URL.revokeObjectURL(url);
    }

    colorCountInput.addEventListener('input', () => {
        renderColorInputs();
        saveColors();
        generate();
    });
    generateBtn.addEventListener('click', generate);
    downloadBtn.addEventListener('click', download);
    typeSelect.addEventListener('change', generate);
    textInput.addEventListener('input', generate);
    intervalInput.addEventListener('input', generate);
    colorsContainer.addEventListener('input', () => {
        saveColors();
        generate();
    });
    formatCheckboxes.forEach(cb => cb.addEventListener('change', generate));

    const saved = loadSavedColors();
    if (saved) {
        colorCountInput.value = saved.count;
        renderColorInputs(saved.colors);
    } else {
        renderColorInputs();
    }
    generate();
}
