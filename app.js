const { useState, useMemo, useEffect } = React;

const PRODUCTS = [
  {
    id: 1,
    name: "Panel Solar Nova 450W",
    category: "Energía",
    price: 1299.90,
    rating: 4.9,
    offer: true,
    icon: "☀️",
    description: "Panel solar de alta eficiencia para hogares y pequeños negocios."
  },
  {
    id: 2,
    name: "Batería EcoCell X",
    category: "Energía",
    price: 1890.00,
    rating: 4.8,
    offer: false,
    icon: "🔋",
    description: "Batería inteligente de respaldo con monitoreo del consumo."
  },
  {
    id: 3,
    name: "Foco Smart GreenLed",
    category: "Iluminación",
    price: 79.90,
    rating: 4.6,
    offer: true,
    icon: "💡",
    description: "Iluminación LED inteligente con ahorro y control programado."
  },
  {
    id: 4,
    name: "Sensor AirPure Home",
    category: "Hogar",
    price: 249.50,
    rating: 4.7,
    offer: false,
    icon: "🌿",
    description: "Mide calidad de aire, humedad y temperatura en tiempo real."
  },
  {
    id: 5,
    name: "Cargador Solar Trek",
    category: "Movilidad",
    price: 159.90,
    rating: 4.5,
    offer: true,
    icon: "🔆",
    description: "Cargador portátil para celulares y dispositivos en exteriores."
  },
  {
    id: 6,
    name: "Termostato EcoSense",
    category: "Hogar",
    price: 329.00,
    rating: 4.8,
    offer: false,
    icon: "🌡️",
    description: "Controla temperatura y reduce el consumo eléctrico."
  },
  {
    id: 7,
    name: "Kit de Riego Inteligente",
    category: "Hogar",
    price: 289.00,
    rating: 4.4,
    offer: true,
    icon: "💧",
    description: "Automatiza el riego según humedad del suelo y horario."
  },
  {
    id: 8,
    name: "Bicicleta Urbana E-Flow",
    category: "Movilidad",
    price: 4599.00,
    rating: 4.9,
    offer: false,
    icon: "🚲",
    description: "Movilidad urbana eléctrica con autonomía extendida."
  },
  {
    id: 9,
    name: "Router GreenNet",
    category: "Oficina",
    price: 410.00,
    rating: 4.3,
    offer: false,
    icon: "📶",
    description: "Router eficiente con gestión inteligente de consumo."
  }
];

const REVIEWS = [
  {
    name: "Valeria Gómez",
    role: "Arquitecta sostenible",
    text: "La interfaz es limpia, rápida y transmite profesionalismo. El catálogo está bien organizado."
  },
  {
    name: "Diego Paredes",
    role: "Jefe de operaciones",
    text: "Se nota el uso de React, eventos, filtros y una buena lógica de interacción."
  },
  {
    name: "Camila Rojas",
    role: "Docente de tecnología",
    text: "Muy buena propuesta para sustentar un proyecto final con alcance comercial real."
  }
];

const SLIDES = [
  {
    id: 1,
    className: "slide-1",
    title: "Tecnología que cuida el planeta",
    text: "Aquí va imagen de un hogar moderno con paneles solares instalados.",
    tag: "Imagen sugerida 1"
  },
  {
    id: 2,
    className: "slide-2",
    title: "Compra eco con una experiencia moderna",
    text: "Aquí va imagen de catálogo de productos sostenibles en laptop y celular.",
    tag: "Imagen sugerida 2"
  },
  {
    id: 3,
    className: "slide-3",
    title: "Automatización útil y elegante",
    text: "Aquí va imagen de dispositivos smart para hogar u oficina ecoeficiente.",
    tag: "Imagen sugerida 3"
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
        <div className="logo">
          <div className="logo-mark">E</div>
          <div>
            <div>EcoTech Store</div>
            <small>SPA sostenible</small>
          </div>
        </div>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#detalle">Detalle técnico</a>
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

        <div className="carousel-placeholder">
          Aquí va el mockup o la imagen decorativa del slide.
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
          <div className="eyebrow">Proyecto final - Desarrollo de Entornos Web</div>
          <h1>Tienda virtual eco-tecnológica con SPA, React y formularios validados</h1>
          <p>
            EcoTech Store es una propuesta de comercio electrónico que integra catálogo dinámico,
            carrito de compras, filtros, validaciones y un carrusel visual para demostrar dominio
            técnico y diseño moderno.
          </p>

          <div className="hero-actions">
            <a href="#catalogo" className="btn btn-primary">Ver catálogo</a>
            <a href="#detalle" className="btn btn-secondary">Ver sustento técnico</a>
          </div>

          <div className="metrics">
            <div className="metric">
              <strong>{totalProducts}</strong>
              <span>Productos</span>
            </div>
            <div className="metric">
              <strong>SPA</strong>
              <span>Navegación fluida</span>
            </div>
            <div className="metric">
              <strong>React</strong>
              <span>Interfaz dinámica</span>
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
        <label>Ordenar</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Destacados</option>
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
      <div className="card-media">{product.icon}</div>

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
            Agregar al carrito
          </button>
          
          {/* Al hacer clic, invertimos el estado actual (de false a true y viceversa) */}
          <button
            className="btn btn-secondary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ocultar detalle" : "Ver detalle"}
          </button>
        </div>
      </div>

      {/* Renderizado condicional: Si isExpanded es true, mostramos esta extensión abajo */}
      {isExpanded && (
        <div className="card-details">
          <h4>Especificaciones:</h4>
          <ul>
            <li><strong>Categoría:</strong> {product.category}</li>
            <li><strong>Valoración:</strong> {product.rating} de 5 estrellas</li>
            <li><strong>Disponibilidad:</strong> En stock (Envío eco-friendly)</li>
          </ul>
          <p>Producto certificado para la reducción de la huella de carbono.</p>
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
          <div className="eyebrow">Catálogo dinámico</div>
          <h2 className="section-title">Productos ecoeficientes</h2>
          <p className="section-text">
            Busca, filtra y ordena productos usando estado, eventos y arreglos de objetos.
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
          <div className="empty">No se encontraron productos con esos filtros.</div>
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
          <div className="eyebrow">Sustento técnico</div>
          <h2 className="section-title">Aplicación de lo aprendido</h2>
          <ul className="list">
            <li>React con JSX y componentes reutilizables.</li>
            <li>useState para filtros, carrito, formulario y carrusel.</li>
            <li>useEffect para temporizador del slider automático.</li>
            <li>Arreglos de objetos y renderizado con map.</li>
            <li>Eventos onClick, onChange y onSubmit.</li>
            <li>Validación de formulario con expresiones regulares.</li>
            <li>Diseño responsive con HTML y CSS separados.</li>
          </ul>
        </div>

        <div className="panel">
          <div className="eyebrow">Imágenes sugeridas</div>
          <h2 className="section-title">Elementos visuales para decorar</h2>
          <ul className="list">
            <li>Aquí va imagen del mockup principal en laptop y móvil.</li>
            <li>Aquí va imagen del mapa de sitio.</li>
            <li>Aquí va imagen de wireframes de alta fidelidad.</li>
            <li>Aquí va imagen del carrito con productos agregados.</li>
            <li>Aquí va imagen del formulario validado correctamente.</li>
            <li>Aquí va imagen del catálogo filtrado por categoría.</li>
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
        <div className="eyebrow">Reseñas simuladas</div>
        <h2 className="section-title">Opiniones de usuarios</h2>

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
      error: "Ingresa nombre y apellido válidos."
    },
    correo: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: "Ingresa un correo válido."
    },
    celular: {
      pattern: /^9\d{8}$/,
      error: "Ingresa un celular peruano válido de 9 dígitos."
    },
    mensaje: {
      pattern: /^.{15,}$/,
      error: "Escribe un mensaje de al menos 15 caracteres."
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
      setMessage("Corrige los campos antes de enviar.");
      return;
    }

    setMessage("Formulario enviado correctamente. Aquí puedes explicar que en una versión real se conectaría a una base de datos o API.");
    setForm(initialForm);
  };

  return (
    <section className="section" id="contacto">
      <div className="container two-col">
        <div className="panel">
          <div className="eyebrow">Formulario validado</div>
          <h2 className="section-title">Solicita asesoría eco tecnológica</h2>
          <p className="section-text">
            Este formulario demuestra validación con expresiones regulares y manejo de eventos.
          </p>
        </div>

        <div className="panel">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Alfred Berceras Ancobar"
              />
              <span className="error">{errors.nombre}</span>
            </div>

            <div className="field">
              <label>Correo electrónico</label>
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
              <label>Celular</label>
              <input
                type="text"
                name="celular"
                value={form.celular}
                onChange={handleChange}
                placeholder="999888777"
              />
              <span className="error">{errors.celular}</span>
            </div>

            <div className="field">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Deseo información sobre productos sostenibles para mi empresa."
              ></textarea>
              <span className="error">{errors.mensaje}</span>
            </div>

            <button className="btn btn-primary" type="submit">
              Enviar solicitud
            </button>

            <div className={`form-message ${message.includes("correctamente") ? "success" : ""}`}>
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
          <h3>Carrito de compras</h3>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty">Tu carrito está vacío.</div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-icon">{item.icon}</div>

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
          <p><strong>Subtotal:</strong> {formatCurrency(total)}</p>
          <div style={{ display: "flex", gap: ".7rem", marginTop: ".8rem" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                if (cart.length === 0) {
                  alert("Agrega productos al carrito.");
                  return;
                }
                alert("Compra simulada realizada con éxito.");
                setCart([]);
                onClose();
              }}
            >
              Finalizar compra
            </button>

            <button className="btn btn-secondary" onClick={onClose}>
              Cerrar
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
          EcoTech Store SPA - Proyecto académico de Desarrollo de Entornos Web
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