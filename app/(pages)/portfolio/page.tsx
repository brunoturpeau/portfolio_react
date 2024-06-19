import {Card} from "@/app/components/Card";

export default function Page() {
    return (
        <>
            <h1 className="h1">Portfolio</h1>
            <p className="text-xl px-5 text-center mb-3">
                Quelques-une de mes réalisations durant la période Pixy Studio : 2007
                - 2016
            </p>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 overflow-y-auto px-5 py-3">
                <div className="grid gap-4 text-center">
                    <Card
                        name={'Hôtel Restaurant les Acacias'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/acacias_1.jpg'}
                    />
                    <Card
                        name={'ABM Serrurerie'}
                        content={'Site vitrine statique'}
                        image={'/images/abm.jpg'}
                    />
                    <Card
                        name={'SCU2 Ultimate'}
                        content={'Catalogue en ligne Prestashop'}
                        image={'/images/scu2ultimate.jpg'}
                    />
                    <Card
                        name={'Swisscars Discount'}
                        content={'Catalogue en ligne Wordpress'}
                        image={'/images/swisscars.jpg'}
                    />
                    <Card
                        name={'Hôtel de la Paix'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/hoteldelapaix.jpg'}
                    />
                    <Card
                        name={'Benoit Hapiot - Artiste peintre'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/hapiot.jpg'}
                    />

                    <Card
                        name={'Health Center Paris'}
                        content={'Boutique en ligne wooCommerce'}
                        image={'/images/health-center.jpg'}
                    />
                    <Card
                        name={'Foot à donf'}
                        content={'Site éditorial Wordpress'}
                        image={'/images/footadonf.jpg'}
                    />
                    <Card
                        name={'Interface Brasserie'}
                        content={'Annuaire Prestashop'}
                        image={'/images/brasserie.png'}
                    />
                    <Card
                        name={'Carnaval Oléron'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/carnaval.jpg'}
                    />
                    <Card
                        name={'Ferme de Bellevue'}
                        content={'Site vitrine Statique'}
                        image={'/images/ferme-bellevue.jpg'}
                    />
                    <Card
                        name={'Pixy Studio'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/pixy2.jpg'}
                    />
                </div>
                <div className="grid gap-4 text-center">
                    <Card
                        name={'Archi Rama'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/archirama.jpg'}
                    />
                    <Card
                        name={'Likoolis'}
                        content={'Boutique en ligne Prestashop'}
                        image={'/images/likoolis.jpg'}
                    />
                    <Card
                        name={'Les Bidules'}
                        content={'Catalogue en ligne Wordpress'}
                        image={'/images/lesbidules.png'}
                    />
                    <Card
                        name={'Maisons du littoral Royannais'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/well-be.jpg'}
                    />
                    <Card
                        name={'Guillet Forge'}
                        content={'Boutique en ligne wooCommerce'}
                        image={'/images/guillet.jpg'}
                    />
                    <Card
                        name={'Air & Solaire'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/aes.jpg'}
                    />
                    <Card
                        name={'Peinture Alibert'}
                        content={'Site vitrine statique'}
                        image={'/images/alibert.png'}
                    />
                    <Card
                        name={'Atelier Du Teck'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/atelierduteck.png'}
                    />
                    <Card
                        name={'Essentiel du Bien-être'}
                        content={'Site vitrine Statique'}
                        image={'/images/ebe4.jpg'}
                    />
                    <Card
                        name={'CH Pro'}
                        content={'Site vitrine Statique'}
                        image={'/images/chpro.jpg'}
                    />
                </div>
                <div className="grid gap-4  text-center">
                    <Card
                        name={'Boutique Indigo'}
                        content={'Boutique en ligne Prestashop'}
                        image={'/images/indigo2.jpg'}
                    />
                    <Card
                        name={'Greg Import USA'}
                        content={'Catalogue en ligne Prestashop'}
                        image={'/images/greg-import.jpg'}
                    />
                    <Card
                        name={'Oogoon'}
                        content={'Développement spécifique'}
                        image={'/images/oogoon.jpg'}
                    />
                    <Card
                        name={'Jean Louis Tolede Contract'}
                        content={'Boutique en ligne Prestashop'}
                        image={'/images/jlt.jpg'}
                    />

                    <Card
                        name={'Camping le Sabia'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/sabia9.jpg'}
                    />
                    <Card
                        name={'Au Pays des Carrelets'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/au-pays-des-carrelets.jpg'}
                    />

                    <Card
                        name={'Le Buffet Marocain'}
                        content={'Site vitrine Statique'}
                        image={'/images/buffet_1.jpg'}
                    />
                    <Card
                        name={'Cycles Leboeuf'}
                        content={'Site vitrine Statique'}
                        image={'/images/cycles_2.jpg'}
                    />
                </div>
                <div className="grid gap-4  text-center">
                    <Card
                        name={'Hôtel les Embruns'}
                        content={'Site vitrine Statique'}
                        image={'images/lesembruns.jpg'}
                    />
                    <Card
                        name={'Maison des couturiers'}
                        content={'Catalogue en ligne Prestashop'}
                        image={'images/maison-couturiers.jpg'}
                    />
                    <Card
                        name={'Orga3Clics'}
                        content={'Site vitrine Statique'}
                        image={'/images/orga3clics.jpg'}
                    />
                    <Card
                        name={'Entreprise Gervreau'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/gervreau.jpg'}
                    />

                    <Card
                        name={'Entreprise Moens'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/moens.jpg'}
                    />
                    <Card
                        name={'CADES'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/cades.png'}
                    />
                    <Card
                        name={'Coiffure Esthétique'}
                        content={'Site vitrine Statique'}
                        image={'/images/coiffure-esthetique.jpg'}
                    />
                    <Card
                        name={'City Jazzy'}
                        content={'Site vitrine Wordpress'}
                        image={'/images/city-jazzy.jpg'}
                    />
                    <Card
                        name={'Hair Style Individuel'}
                        content={'Site vitrine statique'}
                        image={'/images/hsi.jpg'}
                    />
                    <Card
                        name={'Muslim Univers'}
                        content={'Boutique en ligne Prestashop'}
                        image={'/images/muslim-univers.jpg'}
                    />
                </div>
            </div>
        </>
    )
}