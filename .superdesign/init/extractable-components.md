## Navigation
- Source: `src/components/Navigation.tsx`
- Category: layout
- Description: Main top sticky navigation with mobile menu
- Extractable props: none (uses local scroll state)
- Hardcoded: `NAV_ITEMS` (Work, About, Experience, Contact), Logo text, all CSS

## Footer
- Source: `src/components/Footer.tsx`
- Category: layout
- Description: Simple footer with copyright and name
- Extractable props: none
- Hardcoded: Name, copyright year logic

## Section
- Source: `src/components/ui/SectionGrid.tsx`
- Category: basic
- Description: Container layout for page sections
- Extractable props: `id`, `className`
- Hardcoded: Max width containers, paddings, bottom border styling

## SectionGrid
- Source: `src/components/ui/SectionGrid.tsx`
- Category: basic
- Description: Responsive grid layout for listing items
- Extractable props: `cols`
- Hardcoded: Gaps and grid columns scaling

## Button
- Source: `src/components/ui/Button.tsx`
- Category: basic
- Description: Reusable primary, secondary and ghost buttons
- Extractable props: `variant`, `disabled`, `href`, `type`
- Hardcoded: CSS transition styles, typography sizes, layout padding
