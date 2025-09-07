const mockData = {
    "flags": {
        "X": "Adds support for the X Window System.",
        "aac": "Adds support for Advanced Audio Coding.",
        "acl": "Adds support for Access Control Lists.",
        "acpi": "Adds support for Advanced Configuration and Power Interface.",
        "alsa": "Enables support for the ALSA sound system.",
        "amd64": "Enables 64-bit support on AMD64 architecture.",
        "apache2": "Adds support for the Apache 2 web server.",
        "apparmor": "Enables support for the AppArmor security module.",
        "aqua": "Enables support for the Aqua interface on macOS.",
        "avx": "Adds support for Advanced Vector Extensions.",
        "bash-completion": "Enables programmable completion for the bash shell.",
        "berkdb": "Adds support for the Berkeley DB.",
        "blender": "Enables Blender integration.",
        "bluetooth": "Enables Bluetooth support.",
        "boost": "Adds support for the Boost C++ libraries.",
        "branding": "Adds branding elements.",
        "brotli": "Enables Brotli compression.",
        "btrfs": "Adds support for the Btrfs filesystem.",
        "cairo": "Adds support for the Cairo 2D graphics library.",
        "caps": "Adds support for POSIX capabilities.",
        "cdda": "Enables CD Digital Audio support.",
        "cjk": "Adds support for Chinese, Japanese, and Korean character sets.",
        "clang": "Uses the Clang compiler instead of GCC.",
        "clucene": "Adds support for the CLucene search engine library.",
        "cups": "Adds support for the Common Unix Printing System.",
        "curl": "Adds support for the cURL library.",
        "cuda": "Enables NVIDIA CUDA support.",
        "csharp": "Enables C# language support, often via dotnet.",
        "dbus": "Enables D-Bus support for desktop integration.",
        "doc": "Adds documentation.",
        "docker": "Enables Docker container support.",
        "dotnet": "Enables .NET Core support.",
        "dts": "Enables Digital Theater Systems support.",
        "dvd": "Adds DVD support.",
        "efistub": "Enables building a kernel with a built-in EFI stub.",
        "elogind": "Uses elogind for session management.",
        "elixir": "Enables Elixir language support.",
        "emacs": "Adds support for the Emacs editor.",
        "erlang": "Enables Erlang language support.",
        "ext4": "Adds support for the ext4 filesystem.",
        "fat": "Adds support for FAT filesystems.",
        "ffmpeg": "Enables FFmpeg support for video and audio transcoding.",
        "flac": "Adds support for the Free Lossless Audio Codec.",
        "fontconfig": "Enables font configuration and customization.",
        "freetds": "Adds support for the FreeTDS library.",
        "gimp": "Enables GIMP image editor integration.",
        "git": "Uses git for version control.",
        "gmp": "Adds support for the GNU Multiple Precision Arithmetic Library.",
        "gnome": "Adds support for the GNOME desktop environment.",
        "gnupg": "Adds support for the GNU Privacy Guard.",
        "go": "Enables Go language support.",
        "graphics": "Adds support for graphical mode in programs that can also run in text mode (e.g. links).",
        "gstreamer": "Enables the GStreamer multimedia framework.",
        "gtk": "Adds support for the GTK+ toolkit.",
        "hardened": "Enables hardened build options for security.",
        "haskell": "Enables Haskell language support.",
        "i3": "Enables support for the i3 window manager.",
        "ibus": "Enables support for the Intelligent Input Bus.",
        "icu": "Adds support for International Components for Unicode.",
        "imagemagick": "Adds support for the ImageMagick image manipulation suite.",
        "inkscape": "Enables Inkscape vector graphics editor integration.",
        "java": "Adds support for Java.",
        "jpeg": "Adds JPEG image support.",
        "joystick": "Adds support for joysticks and gamepads.",
        "json": "Enables JSON support.",
        "kde": "Adds support for the KDE desktop environment.",
        "kdenlive": "Enables Kdenlive video editor integration.",
        "kerberos": "Adds support for the Kerberos network authentication protocol.",
        "kvm": "Enables support for Kernel-based Virtual Machine.",
        "lame": "Adds support for the LAME MP3 encoder.",
        "latex": "Enables LaTeX support for typesetting.",
        "ldap": "Adds support for the Lightweight Directory Access Protocol.",
        "libinput": "Enables the libinput library for input devices.",
        "libnotify": "Enables desktop notifications.",
        "libressl": "Uses LibreSSL instead of OpenSSL.",
        "llvm": "Uses the LLVM compiler infrastructure.",
        "lto": "Enables Link Time Optimization for better performance.",
        "lua": "Enables Lua scripting language support.",
        "lxc": "Enables support for Linux Containers.",
        "lxqt": "Adds support for the LXQt desktop environment.",
        "lynx": "Enables support for the lynx text-based browser.",
        "lzma": "Enables LZMA compression support.",
        "mariadb": "Adds support for the MariaDB database.",
        "mate": "Adds support for the MATE desktop environment.",
        "matplotlib": "Enables support for the Matplotlib plotting library.",
        "memcached": "Adds support for the Memcached caching daemon.",
        "-minimal": "Disables minimal build features.",
        "modules": "Enables building of kernel modules.",
        "mp3": "Adds MP3 audio support.",
        "mp4": "Adds MP4 video support.",
        "multilib": "Enables support for 32-bit libraries on 64-bit systems.",
        "mysql": "Adds support for the MySQL database.",
        "ncurses": "Enables support for the ncurses terminal UI library.",
        "networkmanager": "Enables support for NetworkManager.",
        "nginx": "Adds support for the Nginx web server.",
        "nodejs": "Enables Node.js support.",
        "ntfs": "Adds support for the NTFS filesystem.",
        "numpy": "Enables NumPy support for numerical operations.",
        "obs-studio": "Enables OBS Studio streaming software integration.",
        "opencl": "Enables OpenCL support for parallel computing.",
        "opengl": "Adds support for OpenGL.",
        "openmp": "Enables OpenMP for multi-threading.",
        "openssl": "Adds support for the OpenSSL library.",
        "opus": "Adds support for the Opus audio codec.",
        "pango": "Adds support for the Pango text layout library.",
        "pax_kernel": "Enables PaX kernel security features.",
        "pcre": "Adds support for Perl-Compatible Regular Expressions.",
        "perl": "Enables Perl language support.",
        "pgo": "Enables Profile Guided Optimization for better performance.",
        "php": "Enables PHP language support.",
        "pipewire": "Enables support for the PipeWire multimedia framework.",
        "plasma": "Adds support for the KDE Plasma desktop.",
        "png": "Adds PNG image support.",
        "postgresql": "Adds support for the PostgreSQL database.",
        "pulseaudio": "Enables support for the PulseAudio sound server.",
        "python": "Enables Python support.",
        "qemu": "Enables QEMU emulator support.",
        "qml": "Enables QML support for declarative UIs.",
        "qt5": "Adds support for the Qt 5 toolkit.",
        "qt6": "Adds support for the Qt 6 toolkit.",
        "readline": "Adds support for the readline library for command-line editing.",
        "redis": "Adds support for the Redis key-value store.",
        "ruby": "Enables Ruby language support.",
        "rust": "Enables Rust language support.",
        "samba": "Adds support for the Samba SMB/CIFS server.",
        "scanner": "Adds support for scanners.",
        "sdl": "Enables support for the Simple DirectMedia Layer.",
        "selinux": "Enables SELinux for mandatory access control.",
        "sound": "Enables sound support.",
        "spell": "Enables spell checking.",
        "sqlite": "Adds support for the SQLite database.",
        "ssh": "Adds support for the Secure Shell protocol.",
        "sse": "Enables Streaming SIMD Extensions.",
        "ssl": "Adds support for Secure Sockets Layer (synonym for openssl).",
        "steam": "Enables Steam gaming platform integration.",
        "svga": "Adds support for SVGAlib.",
        "svg": "Adds SVG image support.",
        "sway": "Enables support for the Sway Wayland compositor.",
        "swift": "Enables Swift language support.",
        "systemd": "Enables support for the systemd init system.",
        "tcpd": "Adds support for TCP wrappers.",
        "test": "Enables running tests.",
        "threads": "Enables multi-threading support.",
        "tiff": "Adds TIFF image support.",
        "tk": "Adds support for the Tk toolkit.",
        "udev": "Enables udev support for device management.",
        "udisks": "Enables udisks support for disk management.",
        "unreal": "Enables support for Unreal Engine.",
        "upower": "Enables upower support for power management.",
        "usb": "Adds USB support.",
        "v4l": "Adds support for Video4Linux.",
        "vaapi": "Enables VA-API for hardware video acceleration.",
        "vdpau": "Enables VDPAU for hardware video acceleration.",
        "vim": "Adds support for the Vim editor.",
        "vim-syntax": "Adds Vim syntax highlighting.",
        "virtualbox": "Enables VirtualBox guest additions.",
        "vmware": "Enables VMWare guest additions.",
        "vulkan": "Adds support for the Vulkan graphics API.",
        "wacom": "Adds support for Wacom tablets.",
        "wayland": "Enables support for the Wayland display server protocol.",
        "webkit": "Enables support for the WebKit rendering engine.",
        "webpack": "Enables Webpack bundler support.",
        "wget": "Adds support for the Wget file downloader.",
        "wifi": "Enables wireless networking support.",
        "x264": "Enables H.264 video encoding.",
        "x265": "Enables H.265/HEVC video encoding.",
        "xfce": "Adds support for the XFCE desktop environment.",
        "xft": "Adds support for Xft font rendering.",
        "xinerama": "Adds support for Xinerama for multi-monitor setups.",
        "xml": "Adds XML support.",
        "xvid": "Enables Xvid video encoding.",
        "zeroconf": "Adds support for Zero-configuration networking.",
        "zfs": "Adds support for the ZFS filesystem.",
        "zlib": "Enables zlib compression support.",
        "zsh-completion": "Enables programmable completion for the zsh shell.",
        "zstd": "Enables Zstandard compression support."
    },
    "packages": {
        "app-containers/docker": ["btrfs", "overlayfs", "device-mapper", "runc"],
        "app-editors/emacs": ["X", "gtk", "imagemagick", "json", "ssl", "xml"],
        "app-editors/vim": ["X", "gtk", "lua", "perl", "python", "ruby"],
        "app-editors/vscode": ["X", "dbus", "gtk", "clang", "nodejs", "python", "rust", "java"],
        "app-emulation/qemu": ["kvm", "spice", "gtk", "sdl", "vnc", "usb", "usbredir"],
        "app-office/libreoffice": ["X", "gtk", "java", "dbus", "cups", "pdfimport", "vulkan"],
        "dev-lang/dotnet": ["dotnet", "sdk", "runtime"],
        "dev-lang/python": ["multilib", "ssl", "threads", "gdbm", "readline", "sqlite", "bluetooth"],
        "dev-qt/qtcore": ["qt5", "qt6", "dbus", "icu", "test"],
        "dev-qt/qtdeclarative": ["qml", "widgets", "test"],
        "games-engines/godot": ["X", "opengl", "vulkan", "pulseaudio", "lto", "game-tools"],
        "games-util/steam-launcher": ["steam", "runtime", "multilib"],
        "media-gfx/blender": ["cuda", "opencl", "cycles", "python", "ffmpeg", "collada", "alembic"],
        "media-video/ffmpeg": ["X", "alsa", "jack", "pulseaudio", "vulkan", "opengl", "vaapi", "vdpau", "x264", "x265", "opus", "vpx"],
        "net-fs/samba": ["samba", "acl", "kerberos", "ldap", "systemd"],
        "net-im/telegram-desktop": ["X", "dbus", "gtk", "pulseaudio", "pipewire", "openal", "webkit"],
        "net-misc/curl": ["ssh", "ssl", "http2", "ldap", "samba"],
        "net-wireless/bluez": ["bluetooth", "dbus", "systemd", "udev", "obex"],
        "sci-libs/scipy": ["python", "numpy", "matplotlib", "lto"],
        "sys-apps/systemd": ["systemd", "udev", "pam", "acl", "lz4", "zstd"],
        "sys-kernel/gentoo-sources": ["symlink", "build", "deblob", "experimental"],
        "www-client/firefox": ["X", 'cairo', "dbus", "gtk", "pulseaudio", "wayland", "lto", "pgo", "wifi", "-minimal", "geckodriver", "screenshot", "system-av1"],
        "www-client/links": ["graphics", "svga", "X", "jpeg", "png", "tiff", "libevent"],
        "www-client/lynx": ["ssl", "ncurses", "brotli"],
        "www-servers/nginx": ["http", "http2", "ssl", "pcre", "brotli", "threads"],
        "x11-base/xorg-server": ["X", "wayland", "glamor", "udev", "elogind", "systemd", "xinerama"],
        "x11-wm/i3": ["X", "gaps", "startup-notification"]
    },
    "relations": {
        "kde":      { "requires": ["qt5", "dbus", "X"] },
        "gnome":    { "requires": ["gtk", "dbus", "X"] },
        "xfce":     { "requires": ["gtk", "dbus", "X"] },
        "plasma":   { "requires": ["kde", "qt5"] },
        "mate":     { "requires": ["gtk"] },
        "lxqt":     { "requires": ["qt5"] },
        "i3":       { "requires": ["X"] },
        "sway":     { "requires": ["wayland"] },
        "pulseaudio": { "conflicts": ["pipewire"] },
        "pipewire": { "conflicts": ["pulseaudio"] },
        "systemd":  { "conflicts": ["elogind"] },
        "elogind":  { "conflicts": ["systemd"] },
        "libressl": { "conflicts": ["openssl", "ssl"] },
        "openssl":  { "conflicts": ["libressl"] },
        "ssl":      { "conflicts": ["libressl"] },
        "graphics": { "requires": ["X"] },
        "qml":      { "requires": ["qt5"] },
        "webkit":   { "requires": ["gtk"] },
        "qt6":      { "requires": ["qt5"] },
        "cups":     { "requires": ["dbus"] },
        "steam":    { "requires": ["multilib", "X"] },
        "docker":   { "requires": ["btrfs"] }
    }
};

class SearchForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                input {
                    background-color: #333;
                    color: #00ff00;
                    border: 1px solid #00ff00;
                    padding: 0.5rem;
                    font-family: inherit;
                    width: 100%;
                    box-sizing: border-box;
                }
            </style>
            <form>
                <input type="text" placeholder="Search for a USE flag, description, or package...">
            </form>
        `;

        this.shadowRoot.querySelector('input').addEventListener('input', (e) => {
            const event = new CustomEvent('search', { detail: e.target.value });
            this.dispatchEvent(event);
        });
    }
}

class ResultsDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .results-container {
                    border: 1px solid #00ff00;
                    padding: 1rem;
                    margin-top: 1rem;
                }
                .result-item {
                    margin-bottom: 0.8rem;
                }
                .relations {
                    font-size: 0.8rem;
                    margin-top: 0.3rem;
                    padding-left: 1rem;
                }
                .requires {
                    color: #87CEEB; /* Sky Blue */
                    display: block;
                }
                .conflicts {
                    color: #FF6347; /* Tomato */
                    display: block;
                }
            </style>
            <div class="results-container">
                <!-- Search results will be displayed here -->
            </div>
        `;
    }

    renderResults(query) {
        let html = '';
        if (!query) {
            this.shadowRoot.querySelector('.results-container').innerHTML = html;
            return;
        }

        const lowerCaseQuery = query.toLowerCase();

        // Search in flags
        for (const [flag, description] of Object.entries(mockData.flags)) {
            if (flag.toLowerCase().includes(lowerCaseQuery) || description.toLowerCase().includes(lowerCaseQuery)) {
                html += `<div class="result-item"><strong>${flag}</strong>: ${description}`;

                const relations = mockData.relations[flag];
                if (relations) {
                    html += `<div class="relations">`;
                    if (relations.requires) {
                        html += `<span class="requires">Requires: ${relations.requires.join(', ')}</span>`;
                    }
                    if (relations.conflicts) {
                        html += `<span class="conflicts">Conflicts: ${relations.conflicts.join(', ')}</span>`;
                    }
                    html += `</div>`;
                }

                html += `</div>`;
            }
        }

        // Search in packages
        for (const [pkg, flags] of Object.entries(mockData.packages)) {
            if (pkg.toLowerCase().includes(lowerCaseQuery)) {
                html += `<div class="result-item"><strong>${pkg}</strong>: ${flags.join(', ')}</div>`;
            }
        }

        this.shadowRoot.querySelector('.results-container').innerHTML = html;
    }
}

class AllFlagsDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .all-flags-container {
                    columns: 4;
                    column-gap: 1.5rem;
                }
                .flag-item {
                    margin-bottom: 0.8rem;
                    break-inside: avoid-column;
                }
                .relations {
                    font-size: 0.8rem;
                    margin-top: 0.3rem;
                }
                .requires {
                    color: #87CEEB; /* Sky Blue */
                    display: block;
                }
                .conflicts {
                    color: #FF6347; /* Tomato */
                    display: block;
                }
            </style>
            <div class="all-flags-container">
            </div>
        `;
        this.renderAllFlags();
    }

    renderAllFlags() {
        let html = '';
        const sortedFlags = Object.entries(mockData.flags).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

        for (const [flag, description] of sortedFlags) {
            html += `<div class="flag-item"><strong>${flag}</strong>: ${description}`;

            const relations = mockData.relations[flag];
            if (relations) {
                html += `<div class="relations">`;
                if (relations.requires) {
                    html += `<span class="requires">Requires: ${relations.requires.join(', ')}</span>`;
                }
                if (relations.conflicts) {
                    html += `<span class="conflicts">Conflicts: ${relations.conflicts.join(', ')}</span>`;
                }
                html += `</div>`;
            }
            html += `</div>`;
        }
        this.shadowRoot.querySelector('.all-flags-container').innerHTML = html;
    }
}

customElements.define('search-form', SearchForm);
customElements.define('results-display', ResultsDisplay);
customElements.define('all-flags-display', AllFlagsDisplay);

const searchSection = document.getElementById('search-section');
const allFlagsSection = document.getElementById('all-flags-section');
const searchBtn = document.getElementById('search-btn');
const allFlagsBtn = document.getElementById('all-flags-btn');

searchBtn.addEventListener('click', () => {
    searchSection.classList.remove('hidden');
    allFlagsSection.classList.add('hidden');
    searchBtn.classList.add('active');
    allFlagsBtn.classList.remove('active');
});

allFlagsBtn.addEventListener('click', () => {
    searchSection.classList.add('hidden');
    allFlagsSection.classList.remove('hidden');
    searchBtn.classList.remove('active');
    allFlagsBtn.classList.add('active');
});

document.querySelector('search-form').addEventListener('search', (e) => {
    document.querySelector('results-display').renderResults(e.detail);
});

// Set initial state
searchBtn.classList.add('active');
