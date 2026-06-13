// js/js-select_servidor-blog.js
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-servidores");
    if (!contenedor) return; // IMPORTANTE: Si no existe el contenedor en esta página, sale pacíficamente.

    const presentaciones = [
        
        { 
        id: "server-instalacion", 
        titulo: "Instalación de Windows Server En VirtualBox", 
        descripcion: "Instalación y ejecución de Windows Server En máquina virtual: VirtualBox", 
        urlEmbed: "https://drive.google.com/file/d/18O7geQN15uRmr79vJXp6jmRjibFPcink/preview",
        urlDescargaPres: "https://drive.google.com/file/d/18O7geQN15uRmr79vJXp6jmRjibFPcink/view?usp=drivesdk", 
        urlDescargaPdf: "https://drive.google.com/file/d/1rl_u67g3ngWkvT8WERANu0RveOpOgUZn/view?usp=drivesdk" 
        }, 
        
        { 
        id: "server-config-basica-1", 
        titulo: "Configuración Básica de Windows Server En VirtualBox",
        descripcion: "Configuración Básica de Windows Server en máquina virtual. Cambio de nombre de equipo, entorno de PowerShell y habilitación de actualizaciones.", 
        urlEmbed: "https://drive.google.com/file/d/1Hl8TQeI8mYd3kINCmOiQEri37edmOiZ9/preview",
         urlDescargaPres: "https://drive.google.com/file/d/1Hl8TQeI8mYd3kINCmOiQEri37edmOiZ9/view?usp=drivesdk", 
         urlDescargaPdf: "https://drive.google.com/file/d/1SHoI-kqLhh_s1zIs3MQEwJJpqTpkTM_2/view?usp=drivesdk" 
         }, 
         
         { id: "server-config-basica-2", 
         titulo: "Administración de Cuentas y Entorno", 
         descripcion: "Configuración Básica de Windows Server en máquina virtual: Creación de Usuarios, confirmación de zona horaria y manejo del programador de tareas.", 
         urlEmbed: "https://drive.google.com/file/d/1h2qJHoAFaQq4r3__oFB0fXTSWxntWvy3/preview", 
         urlDescargaPres: "https://drive.google.com/file/d/1Hl8TQeI8mYd3kINCmOiQEri37edmOiZ9/view?usp=drivesdk", 
         urlDescargaPdf: "https://drive.google.com/file/d/1SHoI-kqLhh_s1zIs3MQEwJJpqTpkTM_2/view?usp=drivesdk" 
         }, 
         { id: "server-discos-roles", 
         titulo: "Gestión de Discos y Comprensión de Roles", 
         descripcion: "Configuración Avanzada de Windows Server en máquina virtual: Configuración de componentes de fax, gestión de discos y análisis estructural de roles.", 
         urlEmbed: "https://drive.google.com/file/d/12Ava0P7EPUeO7gY8GFOtDcsnYDyPI6J0/preview", 
         urlDescargaPres: "https://drive.google.com/file/d/12Ava0P7EPUeO7gY8GFOtDcsnYDyPI6J0/view?usp=drivesdk", 
         urlDescargaPdf: "https://drive.google.com/file/d/1Ecl2kmqrjkZISq_aoSXblj0faEPwC6uL/view?usp=drivesdk" 
         }
    
    
    
    
    /*      
        {
            id: "server-instalacion",
            titulo: "Instalación de Windows Server En VirtualBox",
            descripcion: "Instalación y ejecución de Windows Server En máquina virtual: VirtualBox",
            urlEmbed: "https://drive.google.com/file/d/18O7geQN15uRmr79vJXp6jmRjibFPcink/preview",
            urlDescargaPres: "https://drive.google.com/file/d/18O7geQN15uRmr79vJXp6jmRjibFPcink/view?usp=drivesdk",
            urlDescargaPdf: "https://drive.google.com/file/d/1rl_u67g3ngWkvT8WERANu0RveOpOgUZn/view?usp=drivesdk"
        },
        {
            id: "server-config-basica-1",
            titulo: "Configuración Básica de Windows Server En VirtualBox",
            descripcion: "Configuración Básica de Windows Server en máquina virtual. Cambio de nombre de equipo, entorno de PowerShell y habilitación de actualizaciones.",
            urlEmbed: "https://drive.google.com/file/d/1Hl8TQeI8mYd3kINCmOiQEri37edmOiZ9/preview",
            urlDescargaPres: "https://drive.google.com/file/d/1Hl8TQeI8mYd3kINCmOiQEri37edmOiZ9/view?usp=drivesdk",
            urlDescargaPdf: "https://drive.google.com/file/d/1SHoI-kqLhh_s1zIs3MQEwJJpqTpkTM_2/view?usp=drivesdk"
        }
        */
        
    ];

    let htmlGenerado = `
        <div class="section-dark-title-container">
            <span class="tech-tag">Módulos Especializados</span>
            <h2 class="main-section-title">Infraestructura y Soporte a Servidores</h2>
        </div>
    `;

    presentaciones.forEach(pres => {
        htmlGenerado += `
            <div class="presentation-card" id="${pres.id}">
                <div class="presentation-header">
                    <h3 class="presentation-title">${pres.titulo}</h3>
                    <p class="presentation-desc">${pres.descripcion}</p>
                </div>
                <div class="presentation-body-layout">
                    <div class="viewer-wrapper">
                        <iframe src="${pres.urlEmbed}" class="drive-iframe" allow="autoplay" loading="lazy" title="${pres.titulo}"></iframe>
                    </div>
                    <div class="actions-sidebar">
                        <a href="${pres.urlDescargaPres}" target="_blank" class="btn-download btn-orange">
                            <div class="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            </div>
                            <div class="btn-text"><span>Descargar</span><strong>Presentación PPTX</strong></div>
                        </a>
                        <a href="${pres.urlDescargaPdf}" target="_blank" class="btn-download btn-blue">
                            <div class="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><polyline points="9 15 12 12 15 15"></polyline></svg>
                            </div>
                            <div class="btn-text"><span>Obtener PDF</span><strong>Guía Paso a Paso</strong></div>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlGenerado;
});