import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const SYSTEM_PROMPT = `
Eres "José Alejandro Cruz Pérez", desarrollador full-stack con 4+ años de experiencia en Flutter, React.js y Node.js, jose a podido participar en proyectos para peru y colombia donde ha usado tecnologias nuevas pero aprender super rapido ademas de realizar cursos de node js, flutter + gemini etc.
Responderás preguntas **en primera persona** (como si fueras yo), basándote exclusivamente en mi información profesional ademas de enfatizar los años de estudio que haz cursado y la carrera :

### **Perfil Profesional**: Ingeniero en sistemas computacionales y 
Desarrollador de software con más de 4 años de experiencia en el desarrollo web y móvil, especializado en Flutter. Capaz de diseñar, construir y mantener aplicaciones completas utilizando tecnologías modernas como React.js, Node.js, y bases de datos como SQL Server. Apasionado por el aprendizaje continuo y la colaboración en equipos multidisciplinarios. :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}

### **Habilidades Técnicas**:
- 💻 Lenguajes: Dart, JavaScript, PHP.
- 🛠️ Frameworks/Librerías: Flutter (avanzado), React.js, Node.js, Express.js.
- ☁️ Servicios: Firebase (Auth, Firestore, Storage).
- 🗃️ Bases de datos: SQL Server, MySQL.
- 🔧 Herramientas: Git, Postman, Figma, Ia.
- ⚙️ CMS: WordPress. :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}
- 🚀 Metodologías: Scrum, Agile. :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5}

### **Experiencia Profesional**:
- **Podermail (Marzo 2024 – Mayo 2025)** — Cancún, México  
  - Gestión y mantenimiento de servidores para garantizar su correcto funcionamiento.  
  - Atención y soporte a clientes del sector inmobiliario, resolviendo necesidades técnicas.  
  - Diseño y desarrollo de herramientas internas (acortador de URLs, sistemas de biografías).  
  - Integración de herramientas de marketing y capacitación a nuevos programadores. :contentReference[oaicite:6]{index=6}:contentReference[oaicite:7]{index=7}

- **Flutter Developer Independiente (Febrero 2024 – Marzo 2025)** — Lima, Perú  
  - Desarrollo completo de app web y móvil en Flutter, integrando APIs REST y SQL Server.  
  - Implementación de programación reactiva y reducción del tiempo de desarrollo en un 15%. :contentReference[oaicite:8]{index=8}:contentReference[oaicite:9]{index=9}

- **Factory Apps (Octubre 2023 – Febrero 2024)** — Sinaloa, México  
  - Mejoras e implementaciones en sistemas internos con React.js y Node.js.  
  - Coordinación con clientes para entregas personalizadas a tiempo. :contentReference[oaicite:10]{index=10}:contentReference[oaicite:11]{index=11}

- **Cognosys (Enero 2023 – Septiembre 2023)**  
  - Desarrollo de app móvil de monitoreo con Flutter y backend en Node.js.  
  - Administración de base de datos SQL Server para garantizar la estabilidad del sistema. :contentReference[oaicite:12]{index=12}:contentReference[oaicite:13]{index=13}

### **Proyectos Destacados**:
- **Clone Spotify** en Flutter con Arquitectura Limpia y Firebase.  
- **Chat con inteligencia artificial** en Flutter * gemini + nest js.  
- **Fruti App**: tienda en línea demo en Flutter (Provider, carrito, favoritos).  
- **Nitro App**: integración de Stripe y scraping de productos.  
- **CodeFlicks**: plataforma de info de películas en React.js y Tailwind CSS.  
- **Cono web**: e-commerce con React.js, Node.js, Express.js, Tailwind CSS y MySQL.  
- **DevJoseStore**: venta de electrónica con JavaScript, Node.js, Express.js y Stripe.  
- **Coffe App** & **Search Movie – Debouncer**: blog de café y buscador de películas. :contentReference[oaicite:14]{index=14}:contentReference[oaicite:15]{index=15}

### **Carrera universitaria concluida**:
- Licenciatura en Ingeniería en Sistemas Computacionales, IT Comitán (Graduado: 2024).  
  - Participación destacada en Coding Cup 2023.


### **Certificaciones**:
- Flutter: De Cero a Experto – Udemy (Enero 2022 – Febrero 2022).  
- Node.js Desde Cero – Udemy (Abril 2022 – Mayo 2022).  
- Flutter + gemini – Devtalles (abril 2025 – mayo 2025).  
- Introducción a Typecript – devtalles (junio 2025 – actualmente).
- Angular 20 – devtalles (junio 2025 – actualmente).
- Introducción a JavaScript – Udemy (Febrero 2022 – Marzo 2022). :contentReference[oaicite:18]{index=18}:contentReference[oaicite:19]{index=19}

### **Reconocimientos**:
- Participación destacada en Coding Cup 2023. :contentReference[oaicite:20]{index=20}:contentReference[oaicite:21]{index=21}

### **Reglas**:
1. **Identidad**:  
   - Usa siempre primera persona ("Tengo", "Desarrollé", "Mi experiencia").  
   - Ejemplo: "Tengo 4 años de experiencia en Flutter y React.js".  
2. **Contacto**:  
   - Solo comparte esto:  
     "📧 Mi correo: josealejandroc22@gmail.com | 📞 Teléfono: +52 963 185 3517 | 🌐 Portafolio: ${window.location.href}".  
3. **Límites**:  
   - Si no sé algo: "No tengo esa información precisa, pero puedes contactarme directamente".  
   - Para preguntas técnicas genéricas (ej.: "¿Qué es Node.js?"): responde brevemente y redirige a mi portafolio.
4. **CV**:  
   - Si el usuario solicita mi CV, pide su dirección de correo y envía como adjunto mi archivo PDF de CV.
4. **Resspuestas**:  
   - Responde brevemente, se sutil y consiso siempre enfatiza la carrera universitaria

### **Ejemplos de respuestas**:
- "Trabajé en Podermail desarrollando un acortador de URLs con React.js y Node.js."  
- "Mi portafolio está aquí: https://devjoseale.netlify.app".  
- "¡Hola! Soy José, especialista en Flutter. ¿En qué puedo ayudarte?"  
- "Para colaboraciones, escríbeme a josealejandroc22@gmail.com".  
`;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [chatHistory, setChatHistory] = useState([
    { role: "system", content: SYSTEM_PROMPT },
  ]);
  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    const storedCount = parseInt(
      localStorage.getItem("preguntasCount") || "0",
      10
    );

    if (storedCount >= 30) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Si necesitas detalles adicionales, no dudes en contactarme directamente. Estaré encantado de responder tus preguntas. 📧 josealejandroc22@gmail.com | 📞 +52 963 1853517",
          sender: "bot",
        },
      ]);
      setInput("");
      return;
    }

    setIsLoading(true);

    if (/cv|currículum|curriculum/i.test(message)) {
      setMessages((prev) => [
        ...prev,
        { text: message, sender: "user" },
        {
          text: `Mi cv: <a download="CV_José_Alejandro.pdf"  target="_blank" href="/pdfs/jose_cv.pdf">Descargar</a>`,
          sender: "bot",
          isHtml: true,
        },
      ]);
      setInput("");
      setIsLoading(false);
      return;
    }

    const newCount = storedCount + 1;
    localStorage.setItem("preguntasCount", newCount.toString());

    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const geminiHistory = [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        ...chatHistory
          .filter((msg) => msg.role !== "system")
          .map((msg) => ({
            role: msg.role === "model" ? "model" : "user",
            parts: [{ text: msg.content }],
          })),
        { role: "user", parts: [{ text: message }] },
      ];

      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const chat = model.startChat({
        history: geminiHistory,
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const botMessage = { text: response.text(), sender: "bot" };

      setMessages((prev) => [...prev, botMessage]);
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.role !== "system"),
        { role: "user", content: message },
        { role: "model", content: response.text() },
      ]);
    } catch (error) {
      console.error("Error con Gemini:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error: " + error.message, sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Estilos en línea (personalízalos)
  const styles = {
    chatContainer: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "450px",
      backgroundColor: "#1f2937",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      overflow: "hidden",
      fontFamily: "sans-serif",
    },
    header: {
      padding: "12px 16px",
      backgroundColor: "#111827",
      color: "white",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    messagesContainer: {
      height: "400px",
      overflowY: "auto",
      padding: "16px",
      backgroundColor: "#1f2937",
    },
    message: {
      marginBottom: "12px",
      padding: "8px 12px",
      borderRadius: "8px",
      maxWidth: "80%",
      color: "white",
    },
    userMessage: {
      backgroundColor: "#3b82f6",
      marginLeft: "auto",
      textAlign: "right",
    },
    botMessage: {
      backgroundColor: "#4b5563",
      marginRight: "auto",
    },
    inputContainer: {
      display: "flex",
      padding: "12px 16px",
      backgroundColor: "#111827",
      borderTop: "1px solid #374151",
    },
    input: {
      flex: 1,
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#374151",
      color: "white",
      outline: "none",
    },
    button: {
      marginLeft: "8px",
      padding: "10px 16px",
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    loading: {
      color: "#9ca3af",
      fontStyle: "italic",
    },
    chatButton: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "60px",
      height: "60px",
      backgroundColor: "#3b82f6",
      borderRadius: "50%",
      color: "white",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "24px",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "none",
      border: "none",
      color: "white",
      cursor: "pointer",
      fontSize: "18px",
    },
  };

  return (
    <>
      {!isChatOpen ? (
        <button
          onClick={toggleChat}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-6 right-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-full shadow-lg transition-all duration-300 z-[1000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          {isHovered && (
            <span className="whitespace-nowrap animate-fade-in">
              Habla con JoseIA
            </span>
          )}
        </button>
      ) : (
        <div className="fixed bottom-6 right-6 w-[450px] bg-gray-800 rounded-xl shadow-xl overflow-hidden z-[1000] font-sans">
          <div className="flex justify-between items-center p-3 bg-gray-900 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
              <span className="font-bold">JoseIA</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setMessages([])}
                className="text-gray-300 hover:text-white transition-colors"
                title="Limpiar chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button
                onClick={toggleChat}
                className="text-gray-300 hover:text-white transition-colors"
                title="Minimizar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 bg-gray-800">
            {messages.length === 0 && (
              <div className="bg-gray-700 text-white p-3 rounded-lg max-w-[80%] mb-3">
                ¡Hola! Soy JoseIA, tu asistente virtual. ¿En qué puedo ayudarte
                hoy?
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg mb-3 max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 ml-auto text-right"
                    : "bg-gray-700 mr-auto"
                }`}
              >
                {msg.isHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  msg.text
                )}
              </div>
            ))}

            {isLoading && (
              <div className="bg-gray-700 text-gray-300 p-3 rounded-lg max-w-[80%] mb-3 italic">
                Pensando...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-gray-900 border-t border-gray-700 flex gap-2 flex flex-col w-full ">
            <div
              className="w-full flex overflow-x-auto gap-2 py-3 scrollbar-modern"
              style={{
                scrollBehavior: "smooth", // Desplazamiento suave
              }}
            >
              <button
                onClick={() => {
                  handleSendMessage("¿Qué tecnologías dominas?");
                }}
                className="flex-shrink-0 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm"
              >
                ¿Qué tecnologías dominas?
              </button>
              <button   onClick={()=>{
                handleSendMessage('¿En qué tipo de proyectos has trabajado?');
              }} className="flex-shrink-0 px-3 py-2 bg-black hover:bg-gray-800 text-white rounded-md text-sm font-medium transition-colors shadow-sm">
                ¿En qué tipo de proyectos has trabajado?
              </button>
              <button   onClick={()=>{
                handleSendMessage('¿Qué te apasiona del desarrollo?');
              }} className="flex-shrink-0 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm">
                ¿Qué te apasiona del desarrollo?
              </button>
              <button   onClick={()=>{
                handleSendMessage('¿Cómo enfrentas los retos técnicos?');
              }} className="flex-shrink-0 px-3 py-2 bg-black hover:bg-gray-800 text-white rounded-md text-sm font-medium transition-colors shadow-sm">
                ¿Cómo enfrentas los retos técnicos?
              </button>
            </div>

            <div className="w-full flex gap-1 ">
              {" "}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={() => {
                  handleSendMessage(input);
                }}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiBot;
