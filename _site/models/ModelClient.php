<?php

namespace site\models;

use Yii;
use yii\base\Model;

class ModelClient extends Model {

    public function getClients() {
        return [
            '3D Marketing Group' => '3dmg.jpg',
            'AA Business' => 'aa_business.jpg',
            'Adesso' => 'Adesso.jpg',
            'African Strings' => 'african_strings.jpg',
            'Alterego' => 'Alterego.jpg',
            'Apple Map Store' => 'apple_map_store.jpg',
            'Appliance Universe' => 'appliance_universe.jpg',
            //'Asset Venture' => 'a_venture.jpg',
            'AVS' => 'avs.jpg',
            'BDV Lingerie' => 'bdv_lingerie.jpg',
            'Bliss Bridal' => 'bliss_bridal.jpg',
            'BME Proud' => 'bme_proud.jpg',
            'Boxes and Bubbles' => 'boxes_and_bubbles.jpg',
            'Butterfly Estates' => 'Butterfly_Estates.jpg',
            'CBC Salon' => 'cbc_salon.jpg',
            'Celestial Beauty' => 'CB.jpg',
            'Concepts Scotland' => 'concepts_scotland.jpg',
            'Cook Academy' => 'cook_academy.jpg',
            'Cowdenbeath FC' => 'Cowdenbeath_FC.jpg',
            'Creative Photography Wales' => 'creative_photography_wales.jpg',
            'Dazzling Dummies' => 'dazzling_dummies.jpg',
            'Delphien' => 'delphien.jpg',
            'Drinks Online' => 'drinks_online.jpg',
            'Eastern Coast Hydroponics' => 'eastern_coast_hydroponics.jpg',
            'Eco Direct' => 'eco_direct.jpg',
            'Elite Star Chauffeur' => 'elite_star_chauffeur.jpg',
            'Equitack Online' => 'equitack_online.jpg',
            'Essex Stationery' => 'Essex_Stationery.jpg',
            'Europe Link' => 'Eulink.jpg',
            'Fatboys Poker' => 'fatboys_poker.jpg',
            'First Choice Physio' => 'first_choice_physio.jpg',
            'First Point Software' => 'First_Point.jpg',
            'Full Spectrum' => 'full_spectrum.jpg',
            'Gold Nugget Party' => 'gold_nugget_party.jpg',
            'Green Owl Toys' => 'Green_Owl_Toys.jpg',
            'Halls of Glouscter' => 'halls_of_glouscter.jpg',
            'Hirsel Golf Club' => 'hirsel_golf.jpg',
            'Ideal Windows and Conservatories' => 'Ideal_Windows.jpg',
            'The Imaginarium Appeal' => 'imaginarium.jpg',
            'Inkster' => 'inkster.jpg',
            'ISFA Shop' => 'ISFA.jpg',
            'K9 Security' => 'k9.jpg',
            'Material Girl Cosmetics' => 'material_girl_cosmetics.jpg',
            'MDP Architecture' => 'MDP.jpg',
            'Meadowlea Saddelry' => 'mini_movers.jpg',
            'Mini Movers' => 'meadowlea_saddelry.jpg',
            'Model &amp; Scenic Solutions' => 'modelss.jpg',
            'Musical Tutti' => 'musical_tutti.jpg',
            'Neil Mullholland Racing' => 'n_mulholland.jpg',
            'Nursery &amp; School Guide' => 'select_publishing.jpg',
            'Parts Solutions' => 'parts_solutions.jpg',
            'Pick and Shovel' => 'pick_and_shovel.jpg',
            'Puur' => 'puur.jpg',
            'Racetech Performance' => 'racetech_performace.jpg',
            'Real Men Smell Good' => 'RMSG.jpg',
            'Recycle Your Rubbish' => 'recycle_your_rubbish.jpg',
            'Robinsons Jukebox' => 'robinsons_jukeboxes.jpg',
            'Rowe Associates' => 'rowe_associates.jpg',
            'RTL' => 'rtl.jpg',
            'S &amp; R Fabrics' => 's_r_fabrics.jpg',
            'Scaramanga' => 'Scaramanga.jpg',
            'Shezan Restaurant' => 'shezan.jpg',
            'Sprinkles' => 'sprinkles.jpg',
            'Tbilisi' => 'tbilisi.jpg',
            'Tellurian' => 'tellurian.jpg',
            'Thirsk School' => 'Thirsk-School.jpg',
            'True Vintage' => 'true_vintage.jpg',
            'Ultra Seksy' => 'ultra_seksy.jpg',
            'Uncaged Beauty' => 'uncaged_beauty.jpg',
            'Veekay Jewels' => 'veekay_jewels.jpg',
            'Vindictive' => 'vindictive.jpg',
            'VR Clothing' => 'vr_clothing.jpg',
            'Wonderful Watch Shop' => 'wonderful_watch_shop.jpg',
        ];
    }

    public function randClients(){
        $clients = $this->clients;
        $keys = array_keys($clients);
        shuffle($keys);
        $random = array();
        foreach ($keys as $i => $key) {
            $random[$key] = $clients[$key];
            if($i >= 29){
                break;
            }
        }
        return $random;
    }
}