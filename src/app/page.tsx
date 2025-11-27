import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const repositories = [
  { name: "Answear", slug: "answear", category: "Fashion" },
  { name: "Best Value", slug: "best-value", category: "Retail" },
  { name: "Carturesti", slug: "carturesti", category: "Cărți" },
  { name: "Dr Max", slug: "dr-max", category: "Farmacie" },
  { name: "Elefant", slug: "elefant", category: "Cărți & Jucării" },
  { name: "ePantofi", slug: "epantofi", category: "Încălțăminte" },
  { name: "evoMAG", slug: "evomag", category: "Electronice" },
  { name: "Farmec", slug: "farmec", category: "Cosmetice" },
  { name: "Fashion Days", slug: "fashion-days", category: "Fashion" },
  { name: "Flanco", slug: "flanco", category: "Electronice" },
  { name: "Libris", slug: "libris", category: "Cărți" },
  { name: "Modivo", slug: "modivo", category: "Fashion" },
  { name: "Notino", slug: "notino", category: "Parfumuri" },
  { name: "Otter", slug: "otter", category: "Outdoor" },
  { name: "Pentru Animale", slug: "pentru-animale", category: "Pet Shop" },
  { name: "Sinsay", slug: "sinsay", category: "Fashion" },
  { name: "Spring Farma", slug: "spring-farma", category: "Farmacie" },
  { name: "Spy Shop", slug: "spy-shop", category: "Securitate" },
];

const categoryColors: Record<string, string> = {
  "Fashion": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "Retail": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Cărți": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Farmacie": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "Cărți & Jucării": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "Încălțăminte": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "Electronice": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Cosmetice": "bg-rose-500/20 text-rose-300 border-rose-500/30",
  "Parfumuri": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
  "Outdoor": "bg-lime-500/20 text-lime-300 border-lime-500/30",
  "Pet Shop": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Securitate": "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-chart-3/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xl font-bold text-background">C</span>
            </div>
            <span className="text-xl font-bold gradient-text">Cuponescu</span>
          </div>
          <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
            <a href="https://cuponescu.ro" target="_blank" rel="noopener noreferrer">
              Vizitează Cuponescu.ro →
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="animate-float inline-block mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-lg shadow-primary/25">
            <span className="text-4xl font-bold text-background">C</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Colecție Coduri</span>
          <br />
          <span className="text-foreground/90">de Reducere</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Pachete NPM open-source cu coduri de reducere pentru cele mai populare magazine online din România. 
          Creat de echipa <a href="https://cuponescu.ro" className="text-primary hover:underline">Cuponescu</a>.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50">
            🏪 {repositories.length} Magazine
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm border-accent/50">
            📦 Pachete NPM
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm border-chart-3/50">
            🔓 Open Source
          </Badge>
        </div>
      </section>

      {/* Repositories Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <Card 
              key={repo.slug} 
              className="card-hover bg-card/50 backdrop-blur border-border/50 overflow-hidden group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:underline transition-all">
                      {repo.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      cod-reducere-{repo.slug}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className={categoryColors[repo.category] || "bg-gray-500/20 text-gray-300"}>
                    {repo.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2 mb-4">
                  <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                    npm i cod-reducere-{repo.slug}
                  </code>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <a 
                      href={`https://github.com/cuponescu/cod-reducere-${repo.slug}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1 border-accent/50 hover:bg-accent/10">
                    <a 
                      href={`https://cuponescu.ro/magazin/${repo.slug}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Cod reducere {repo.name}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Creat cu ❤️ de echipa{" "}
            <a href="https://cuponescu.ro" className="text-primary hover:underline">
              Cuponescu
            </a>
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} Cuponescu. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
