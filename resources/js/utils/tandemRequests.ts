interface SentRequest {
    id: number;
    name: string;
    role: string;
    avatar: string;
    date: string;
    tags: string[];
}

const STORAGE_KEY = 'tandem_sent_requests';

/**
 * Récupère toutes les demandes envoyées depuis localStorage
 */
export function getSentRequests(): SentRequest[] {
    if (typeof window === 'undefined') return [];

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

/**
 * Ajoute une nouvelle demande envoyée
 */
export function addSentRequest(request: SentRequest): void {
    if (typeof window === 'undefined') return;

    const requests = getSentRequests();

    // Vérifier si la demande existe déjà
    if (requests.some((r) => r.id === request.id)) {
        return;
    }

    requests.push(request);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
}

/**
 * Supprime une demande envoyée par son ID
 */
export function removeSentRequest(id: number): void {
    if (typeof window === 'undefined') return;

    const requests = getSentRequests();
    const filtered = requests.filter((r) => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

/**
 * Vérifie si une demande a déjà été envoyée pour un utilisateur
 */
export function hasSentRequest(id: number): boolean {
    const requests = getSentRequests();
    return requests.some((r) => r.id === id);
}

/**
 * Formate la date relative (ex: "Il y a 2 heures")
 */
export function formatRelativeDate(): string {
    return "À l'instant";
}
