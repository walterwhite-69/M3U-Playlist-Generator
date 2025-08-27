# Overview

This is a full-stack web application that generates M3U playlist files for streaming media. The app features a React frontend with a modern UI using Shadcn/UI components and a Node.js/Express backend. Users can input channel names, logo URLs, and streaming URLs to generate properly formatted M3U playlist files that can be used with media players and IPTV applications.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with React and TypeScript, using Vite as the build tool and development server. The application follows a component-based architecture with:

- **UI Framework**: Shadcn/UI components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

The main application features a single-page M3U generator interface with real-time preview, dark/light theme support, and responsive design. The UI includes input fields for channel data and displays the generated M3U content with copy/download functionality.

## Backend Architecture

The backend uses Express.js with TypeScript in ESM module format. Key architectural decisions include:

- **Framework**: Express.js with custom route registration system
- **Development Setup**: Custom Vite integration for SSR and hot module replacement
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Error Handling**: Centralized error middleware with proper HTTP status codes

The server includes middleware for request logging, JSON parsing, and development-specific features like Vite integration and error overlays.

## Data Storage

The application uses a flexible storage architecture:

- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Centralized schema definitions in shared directory
- **Current Implementation**: In-memory storage for development with interface-based design for easy database integration
- **User Schema**: Basic user table with ID, username, and password fields

The storage interface allows for easy migration from in-memory storage to PostgreSQL without changing application logic.

## Development and Build

The project uses a monorepo structure with shared TypeScript configurations:

- **Build Tool**: Vite for frontend, esbuild for backend production builds
- **Development**: Concurrent development server with Vite middleware integration
- **TypeScript**: Shared configuration with path mapping for clean imports
- **Hot Reload**: Full-stack hot reloading in development mode

## Styling and Theming

The application implements a comprehensive design system:

- **Component Library**: Shadcn/UI with extensive component coverage
- **Theme System**: CSS custom properties with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Typography**: Custom font stack with fallbacks

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL adapter
- **Drizzle Kit**: Database migration and introspection tools

## UI and Styling
- **Radix UI**: Comprehensive primitive components for accessible UI
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type-safe JavaScript development
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration

## Utilities
- **Date-fns**: Date manipulation library
- **Class Variance Authority**: Utility for managing component variants
- **clsx/twMerge**: Conditional CSS class utilities
- **nanoid**: Unique ID generation