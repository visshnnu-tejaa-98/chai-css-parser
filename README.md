# ☕ ChaiCSS — A Lightweight Utility Theme Engine

**ChaiCSS** is a lightweight JavaScript-based styling engine that allows you to style your web pages using simple utility classes.

Just include **one JavaScript file**, and all styles are automatically applied to your HTML elements — no external CSS file required.

All styling utilities are prefixed with:

```
chai-
```

Netlify: [LINK](https://chai-css-parser.netlify.app)

Demo: [Youtube](https://youtu.be/a05pv1dbmv4?si=QqNpHKHDXWMdR43G)

# 💡 Idea Behind ChaiCSS

ChaiCSS is designed to make styling:

- Simple
- Consistent
- Fast
- Minimal

Instead of writing CSS files, you simply use **utility classes** directly inside your HTML.

Just:

1. Include the ChaiCSS src directory at root level
2. Point to `src/index.js` file in html
3. Use `chai-` classes
4. Styles automatically appear

No setup.
No build tools.
No configuration.

## Step 1 — Include the Script

Add the script inside your HTML:

```html
<script type="module" src="../src/index.js"></script>
```

That's it.

No CSS file needed.

## Step 2 — Use Chai Classes

Use utility classes directly inside HTML:

```html
<div class="chai-p-20 chai-bg-#1a1a1a chai-rounded-10">Hello ChaiCSS</div>
```

Your element will automatically receive:

- Padding
- Background color
- Border radius

All applied dynamically.

# 🎨 Chai Theme Philosophy

Every style starts with:

```
chai-
```

This keeps your design:

- Clean
- Organized
- Easy to read
- Easy to scale

Example:

```html
<button
  class="
    chai-p-12
    chai-bg-rgba(251,146,60,1)
    chai-text-white
    chai-rounded-6
    chai-cursor-pointer
  "
>
  Get Started
</button>
```

# 🧩 Common Utilities

ChaiCSS includes commonly used UI utilities.

## Spacing

```html
chai-p-20 chai-m-10 chai-mt-15 chai-mb-20
```

Used for padding and margin.

## Typography

```html
chai-fs-18 chai-fw-bold chai-text-white
```

Used for:

- Font size
- Font weight
- Text color

## Layout

```html
chai-w-300 chai-h-120 chai-align-center
```

Used for:

- Width
- Height
- Alignment

## Background

```html
chai-bg-#111111 chai-bg-rgba(251,146,60,1)
```

Used to set background colors.

## Borders

```html
chai-border-1 chai-rounded-8 chai-border-1-solid-#444444
```

Used for borders and rounded corners.

## Flexbox

```html
chai-flex chai-items-center chai-justify-between
```

Used for layout alignment.

# 🧪 Example

```html
<nav
  class="
    chai-flex
    chai-items-center
    chai-justify-between
    chai-p-20
    chai-bg-#1a1a1a
    chai-border-1
  "
>
  <div class="chai-fs-22 chai-text-white">LearnHub</div>
</nav>
```

This creates a fully styled navigation bar using only classes.

# 🌍 Where This Is Useful

ChaiCSS is great for:

- Rapid prototyping
- UI experiments
- Learning CSS utilities
- Small projects
- Personal tools
- Theme-driven layouts

# ☕ Why "Chai"?

Because just like a good cup of chai:

- Simple
- Reliable
- Comforting
- Always works ☕

ChaiCSS aims to provide a **warm, consistent styling experience** across your UI.

# 📦 No Build Required

ChaiCSS works without:

- Bundlers
- Compilers
- CSS frameworks
- Configuration

Just include the script and start styling.

# 🎯 Design Principle

Every component follows:

```
Utility First
Consistency Always
Zero Setup
```

# 🔮 Future Ideas

Possible improvements:

- Responsive utilities
- Grid Layout
- Hover and focus states
- Theme customization
- Animation utilities
- Component presets

# 📜 License

MIT License

Free to use and modify.

# ✨ Final Note

ChaiCSS is built as a **minimal theme-first styling system** to make UI development fast and enjoyable.

Just add:

```
chai-
```

And your UI comes to life.

☕ Happy styling.
