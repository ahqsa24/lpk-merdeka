import MasonaryGalery from "../organisms/MasonaryGalery"
import { LineHeading } from "../molecules"

export const GaleryTemplate = () => (
    <main className="px-48 min-h-screen">
        <LineHeading 
            title="Galeri"
        />
        <div className="py-16">
            <MasonaryGalery />
        </div>
    </main>
)