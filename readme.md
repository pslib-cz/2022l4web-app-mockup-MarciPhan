# Plan maker
Demo page: https://pslib-cz.github.io/2022l4web-app-mockup-MarciPhan/

Plánovač dne umožní uživatelům vytvářet plány svého dne v programových blocích. 
Dále by aplikace měla umožňovat uživatelům vytvářet nové bloky, upravovat nebo odstraňovat existující bloky. Uživatelé by měli mít možnost přesouvat bloky. Také bloky by mělo jít uložit do celkového seznamu znovupoužitelných bloků. Také by se měly sčítat délky jednotlivých bloků. Celý editor by měl být snadno použitelný a intuitivní, aby uživatelé mohli snadno vytvářet a upravovat své plány.

Popis komponent na stránce:
Základní aplikace se rozděluje do dvou záložek:
1. Záložka: Tvůrce programu
- V této záložce si uživatel může vytvořit rozvrh svého dne. Po kliknutí na tlačítko "Vytvořit program" se vytvoří první blok v tvůrci programu a zmizí samotné tlačítko na vytvoření programu.
    - Objeví se nový přepínač s názvem "Editovat program". Pokud je tento přepínač aktivovaný tak lze bloky programu editovat. Když je deaktivovaný bloky programu nelze upravovat. Také když se tento přepínač deaktivuje uloží se program do mezipaměti prohlížeče. Když se uživatel vrátí tak se mu naposledy uložený program zobrazí.
- Obsah programového bloku:
    - Název programu: Uživatel by měl mít možnost zadat název programu s tím, že se mu automaticky dopisovalo již z uložených bloků. V okamžiku, kdy by potvrdil název programu, který je již uložen, tak by se vyplnily všechny ostatní informace o bloku programu.
    - Typ programu: Uživatel by měl mít možnost zadat typ programu s tím, že se mu automaticky dopisovalo již z uložených typů. Typy programů by mohly zahrnovat například práci, školu, volný čas, atd.
    - Délka programu: Uživatel by měl mít možnost určit délku programu v minutách.
    - Textový editor: Uživatel by měl mít možnost v bloku zadat poznámky nebo další informace o programu.
    - Zodpovědná osoba: Výběr s uložených osob. A určuje kdo má část programu na starost.
    - Uložení bloku do knihovny umožnuje nově vytvořený blok nahrát do databáze programových bloků.
    - Přesunutí o blok níže nebo výše.
    - Smazání bloku z tvůrce programu.
    - Uložení bloku do mezipaměti prohlížeče.
    - Přidání nového bloku, který se přidá pod aktuální blok.
2. Záložka: Znovupoužitelné bloky
- V této záložce si uživatel naleznete všechny uložené bloky z tvůrce programu. Po kliknutí na tlačítko " Vytvořit nový programový blok" se vytvoří nový programový blok, který se automaticky uloží do knihovny bloků programu. Typ programu definuje název kategorie, do které budou ukládány bloky programu. Bloky programu jdou také v této knihovně editovat či mazat.
    - U každého uloženého bloku lze zobrazit detail a smazat ho.
### Tvůrce programu bez bloků programu
![Screen1](/images/Screenshot_16.jpg)
### Tvůrce programu s dvěmi programovými bloky
![Screen2](/images/Screenshot_17.jpg)
### Knihovna bloků programu
![Screen3](/images/Screenshot_18.jpg)
### Detail bloku programu v knihovně programů (popup je zarovnán na střed obrazovky)
![Screen4](/images/Screenshot_19.jpg)
### Možnost úpravy bloku programu v knihovně programů (popup je zarovnán na střed obrazovky)
![Screen5](/images/Screenshot_20.jpg)
### Vytvoření nového bloku programu v knihovně programů (popup je zarovnán na střed obrazovky)
![Screen6](/images/Screenshot_21.jpg)
