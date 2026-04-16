const { useState, useMemo, useEffect } = React;

// 1. Mapeo de productos (Se mantienen tus rutas de imágenes de productos)
const PRODUCTS = [
  {
    id: 1,
    name: "Panel Solar Nova 450W",
    category: "Energía",
    price: 1299.90,
    rating: 4.9,
    offer: true,
    image: "img/panelSolar450.jpg",
    description: "Panel solar de alta eficiencia para hogares y pequeños negocios."
  },
  {
    id: 2,
    name: "Batería EcoCell X",
    category: "Energía",
    price: 1890.00,
    rating: 4.8,
    offer: false,
    image: "img/ecoShell.avif",
    description: "Batería inteligente de respaldo con monitoreo del consumo."
  },
  {
    id: 3,
    name: "Foco Smart GreenLed",
    category: "Iluminación",
    price: 79.90,
    rating: 4.6,
    offer: true,
    image: "img/focoSmart.webp",
    description: "Iluminación LED inteligente con ahorro y control programado."
  },
  {
    id: 4,
    name: "Sensor AirPure Home",
    category: "Hogar",
    price: 249.50,
    rating: 4.7,
    offer: false,
    image: "img/sensorAir.jpg",
    description: "Mide calidad de aire, humedad y temperatura en tiempo real."
  },
  {
    id: 5,
    name: "Cargador Solar Trek",
    category: "Movilidad",
    price: 159.90,
    rating: 4.5,
    offer: true,
    image: "img/cargadorSolar.jpg",
    description: "Cargador portátil para celulares y dispositivos en exteriores."
  },
  {
    id: 6,
    name: "Termostato EcoSense",
    category: "Hogar",
    price: 329.00,
    rating: 4.8,
    offer: false,
    image: "img/termostatoEco.jpg",
    description: "Controla temperatura y reduce el consumo eléctrico."
  },
  {
    id: 7,
    name: "Kit de Riego Inteligente",
    category: "Hogar",
    price: 289.00,
    rating: 4.4,
    offer: true,
    image: "img/kitRiego.webp",
    description: "Automatiza el riego según humedad del suelo y horario."
  },
  {
    id: 8,
    name: "Bicicleta Urbana E-Flow",
    category: "Movilidad",
    price: 4599.00,
    rating: 4.9,
    offer: false,
    image: "img/bicicletaUrban.jpg",
    description: "Movilidad urbana eléctrica con autonomía extendida."
  },
  {
    id: 9,
    name: "Router GreenNet",
    category: "Oficina",
    price: 410.00,
    rating: 4.3,
    offer: false,
    image: "img/routerGreen.jpg",
    description: "Router eficiente con gestión inteligente de consumo."
  }
];

const REVIEWS = [
  {
    name: "Valeria Gómez",
    role: "Arquitecta sostenible",
    text: "La calidad de los paneles y el asesoramiento para reducir mi huella de carbono fueron excepcionales."
  },
  {
    name: "Diego Paredes",
    role: "Jefe de operaciones",
    text: "EcoTech es mi primera opción para equipar mi oficina con tecnología que respeta el planeta."
  },
  {
    name: "Camila Rojas",
    role: "Especialista ambiental",
    text: "Es inspirador ver una tienda que prioriza la eficiencia energética en cada uno de sus productos."
  }
];

// 2. Sliders actualizados con imágenes reales y textos de marca 
const SLIDES = [
  {
    id: 1,
    className: "slide-1",
    title: "Tecnología que cuida el planeta",
    text: "Soluciones inteligentes diseñadas para reducir tu impacto ambiental sin sacrificar el rendimiento.",
    image: "img/tecnologiaQueCuida.png", // 
    tag: "Energía Limpia"
  },
  {
    id: 2,
    className: "slide-2",
    title: "Un catálogo pensado en el futuro",
    text: "Cada producto en nuestra tienda ha sido seleccionado bajo estrictos estándares de sostenibilidad.",
    image: "img/compraEco.png", // 
    tag: "Consumo Consciente"
  },
  {
    id: 3,
    className: "slide-3",
    title: "Hogares inteligentes y sostenibles",
    text: "Transforma tu espacio con dispositivos de vanguardia que optimizan el uso de recursos naturales.",
    image: "img/automatizacionUtil.png", // 
    tag: "Innovación Eco"
  }
];

function formatCurrency(value) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN"
  }).format(value);
}

function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Se reemplaza el logo-mark por la imagen real */}
          <img 
            src="img/Ecotech-Enviro-Logo-2048x662.png" 
            alt="EcoTech Logo" 
            style={{ height: "50px", width: "auto", objectFit: "contain" }} 
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
           
            <small style={{ color: "var(--muted)", fontWeight: "500" }}>Compromiso Verde</small>
          </div>
        </div>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#detalle">Sustento</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-secondary" onClick={onOpenCart}>
            Carrito <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[index];

  return (
    <div className="hero-carousel">
      <div className={`carousel-box ${slide.className}`}>
        <div>
          <small>{slide.tag}</small>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </div>

        {/* 3. Se reemplaza el marcador de posición por la imagen real del slider */}
        <div className="carousel-placeholder" style={{ background: "none", border: "none", padding: 0, overflow: "hidden" }}>
          <img 
            src={slide.image} 
            alt={slide.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "18px" }} 
          />
        </div>
      </div>

      <div className="carousel-controls">
        <div style={{ display: "flex", gap: ".7rem" }}>
          <button className="btn btn-secondary" onClick={prevSlide}>Anterior</button>
          <button className="btn btn-secondary" onClick={nextSlide}>Siguiente</button>
        </div>

        <div className="dots">
          {SLIDES.map((item, i) => (
            <button
              key={item.id}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero({ totalProducts }) {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Tu aliado en sostenibilidad tecnológica</div>
          <h1>Innovación de vanguardia para un estilo de vida consciente</h1>
          <p>
            En EcoTech Store, nuestra misión es facilitar el acceso a soluciones tecnológicas que minimicen el impacto ambiental, promoviendo un futuro donde la innovación y la ecología caminen siempre de la mano.
          </p>

          <div className="hero-actions">
            <a href="#catalogo" className="btn btn-primary">Explorar catálogo</a>
            <a href="#contacto" className="btn btn-secondary">Asesoría gratuita</a>
          </div>

          <div className="metrics">
            <div className="metric">
              <strong>{totalProducts}</strong>
              <span>Eco-Soluciones</span>
            </div>
            <div className="metric">
              <strong>100%</strong>
              <span>Sostenible</span>
            </div>
            <div className="metric">
              <strong>CO₂</strong>
              <span>Huella Reducida</span>
            </div>
          </div>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
}

function Filters({ search, setSearch, category, setCategory, sort, setSort, categories }) {
  return (
    <div className="filters">
      <div className="field">
        <label>Buscar producto</label>
        <input
          type="text"
          placeholder="Ejemplo: panel solar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Todas">Todas</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Ordenar por</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Más recomendados</option>
          <option value="priceAsc">Precio: menor a mayor</option>
          <option value="priceDesc">Precio: mayor a menor</option>
          <option value="ratingDesc">Mejor valorados</option>
        </select>
      </div>
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="card">
      <div className="card-media">
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </div>

      <div className="card-body">
        <div className="badges">
          <span className="badge badge-category">{product.category}</span>
          {product.offer && <span className="badge badge-offer">Oferta eco</span>}
        </div>

        <div>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-desc">{product.description}</p>
        </div>

        <div className="card-footer">
          <span className="price">{formatCurrency(product.price)}</span>
          <span className="rating">★ {product.rating}</span>
        </div>

        <div className="card-actions">
          <button className="btn btn-primary" onClick={() => onAdd(product)}>
            Añadir al carrito
          </button>
          
          <button
            className="btn btn-secondary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ocultar ficha" : "Ver detalles técnicos"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="card-details">
          <h4>Especificaciones:</h4>
          <ul>
            <li><strong>Categoría:</strong> {product.category}</li>
            <li><strong>Impacto:</strong> Alta eficiencia energética</li>
            <li><strong>Garantía:</strong> 2 años de soporte técnico</li>
          </ul>
          <p>Este producto cumple con los estándares internacionales de cuidado ambiental.</p>
        </div>
      )}
    </article>
  );
}

function Catalog({ products, onAdd }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [sort, setSort] = useState("default");

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === "Todas" || product.category === category;
      return matchesSearch && matchesCategory;
    });

    if (sort === "priceAsc") result.sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") result.sort((a, b) => b.price - a.price);
    if (sort === "ratingDesc") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [products, search, category, sort]);

  return (
    <section className="section" id="catalogo">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Selección Especial</div>
          <h2 className="section-title">Productos para un mundo más limpio</h2>
          <p className="section-text">
            Explora herramientas tecnológicas seleccionadas para optimizar el consumo de energía en tu hogar u oficina.
          </p>
        </div>

        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          categories={categories}
        />

        {filteredProducts.length === 0 ? (
          <div className="empty">No se encontraron productos que coincidan con tu búsqueda eco.</div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TechnicalSection() {
  return (
    <section className="section" id="detalle">
      <div className="container two-col">
        <div className="panel">
          <div className="eyebrow">Arquitectura Digital</div>
          <h2 className="section-title">Nuestra Infraestructura Técnica</h2>
          <ul className="list">
            <li>Interfaz construida con React para una respuesta inmediata.</li>
            <li>Gestión de estados reactivos para filtros y carrito.</li>
            <li>Sincronización de efectos para automatización visual.</li>
            <li>Estructura de datos optimizada para carga rápida.</li>
            <li>Validaciones de seguridad en comunicaciones externas.</li>
            <li>Diseño adaptable a cualquier dispositivo móvil.</li>
          </ul>
        </div>

        <div className="panel">
          <div className="eyebrow">Procesos de Mejora</div>
          <h2 className="section-title">Garantía y Seguimiento</h2>
          <ul className="list">
            <li>Monitoreo constante del catálogo de productos.</li>
            <li>Optimización de recursos en la plataforma digital.</li>
            <li>Actualizaciones de seguridad periódicas.</li>
            <li>Flujo de compra intuitivo y seguro.</li>
            <li>Atención al cliente personalizada y rápida.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="section">
      <div className="container panel">
        <div className="eyebrow">Testimonios Reales</div>
        <h2 className="section-title">Confianza Verde</h2>

        {REVIEWS.map((review, index) => (
          <div className="review" key={index}>
            <p>“{review.text}”</p>
            <strong>{review.name}</strong>
            <small>{review.role}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const initialForm = {
    nombre: "",
    correo: "",
    celular: "",
    mensaje: ""
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validators = {
    nombre: {
      pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+){1,}$/,
      error: "Por favor, ingresa tu nombre y apellido completo."
    },
    correo: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: "Ingresa un correo electrónico válido."
    },
    celular: {
      pattern: /^9\d{8}$/,
      error: "Ingresa un número de celular de 9 dígitos."
    },
    mensaje: {
      pattern: /^.{15,}$/,
      error: "El mensaje debe tener al menos 15 caracteres."
    }
  };

  const validateField = (name, value) => {
    const rule = validators[name];
    if (!rule.pattern.test(value.trim())) return rule.error;
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, form[key]);
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      setMessage("Por favor, revisa los campos antes de enviar.");
      return;
    }

    setMessage("¡Gracias! Tu solicitud ha sido recibida. Un asesor se pondrá en contacto contigo pronto.");
    setForm(initialForm);
  };

  return (
    <section className="section" id="contacto">
      <div className="container two-col">
        <div className="panel">
          <div className="eyebrow">Atención Directa</div>
          <h2 className="section-title">¿Necesitas asesoría personalizada?</h2>
          <p className="section-text">
            Si tienes dudas sobre qué solución es la mejor para tu espacio, déjanos tus datos y un experto te ayudará a elegir.
          </p>
        </div>

        <div className="panel">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Nombre y Apellido</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
              />
              <span className="error">{errors.nombre}</span>
            </div>

            <div className="field">
              <label>Correo Electrónico</label>
              <input
                type="text"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
              />
              <span className="error">{errors.correo}</span>
            </div>

            <div className="field">
              <label>Teléfono de contacto</label>
              <input
                type="text"
                name="celular"
                value={form.celular}
                onChange={handleChange}
                placeholder="99999cito"
              />
              <span className="error">{errors.celular}</span>
            </div>

            <div className="field">
              <label>Consulta o requerimiento</label>
              <textarea
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Describe brevemente lo que necesitas..."
              ></textarea>
              <span className="error">{errors.mensaje}</span>
            </div>

            <button className="btn btn-primary" type="submit">
              Enviar consulta
            </button>

            <div className={`form-message ${message.includes("recibida") ? "success" : ""}`}>
              {message}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function CartDrawer({ open, onClose, cart, setCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id, type) => {
    const updated = cart
      .map((item) => {
        if (item.id !== id) return item;
        const quantity = type === "inc" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity };
      })
      .filter((item) => item.quantity > 0);

    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      {open && <div className="overlay" onClick={onClose}></div>}

      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Tu Selección Eco</h3>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty">Aún no has seleccionado productos sostenibles.</div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-icon">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                  />
                </div>

                <div>
                  <strong>{item.name}</strong>
                  <div>{formatCurrency(item.price)}</div>
                  <div className="qty-box">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, "dec")}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, "inc")}>+</button>
                  </div>
                </div>

                <button className="btn btn-secondary" onClick={() => removeItem(item.id)}>X</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <p><strong>Total estimado:</strong> {formatCurrency(total)}</p>
          <div style={{ display: "flex", gap: ".7rem", marginTop: ".8rem" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                if (cart.length === 0) {
                  alert("Agrega productos para iniciar tu compra consciente.");
                  return;
                }
                alert("¡Gracias por preferir EcoTech! Procesando tu pedido sostenible...");
                setCart([]);
                onClose();
              }}
            >
              Confirmar pedido
            </button>

            <button className="btn btn-secondary" onClick={onClose}>
              Seguir explorando
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setOpenCart(true);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Header cartCount={cartCount} onOpenCart={() => setOpenCart(true)} />
      <Hero totalProducts={PRODUCTS.length} />
      <Catalog products={PRODUCTS} onAdd={addToCart} />
      <TechnicalSection />
      <ReviewsSection />
      <ContactForm />
      <footer className="footer">
        <div className="container">
          EcoTech Store - Tecnología responsable para un futuro mejor
        </div>
      </footer>

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
