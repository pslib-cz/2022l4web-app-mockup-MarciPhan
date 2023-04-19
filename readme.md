# Plan maker
Demo page: https://pslib-cz.github.io/2022l4web-app-mockup-MarciPhan/
(na demo page nefunguje javascrit :( )

# Plan maker
Demo page: https://pslib-cz.github.io/2022l4web-app-mockup-MarciPhan/
(na demo page nefunguje javascrit :( )

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

In English:
Plan maker is an application that allows users to create their daily plans using program blocks. Users can create new blocks, edit or remove existing ones, and move them around. The blocks can also be saved in a reusable block list, and the length of each block can be calculated. The entire editor should be user-friendly and intuitive to allow users to easily create and modify their plans.

The basic application is divided into two tabs:

    Creator tab:

    In this tab, users can create their daily schedule. Clicking on the "Create program" button creates the first block in the creator and removes the button.
        - A new toggle switch named "Edit program" appears. When this switch is activated, the program blocks can be edited. When it's deactivated, the program is saved in the browser cache. When the user returns, the last saved program is displayed.
    Program block content:
       - Program name: Users can enter the program name, and the system will automatically suggest previously saved program names. If the user confirms a name that's already saved, all other information about the program block is filled in.
        - Program type: Users can enter the program type, and the system will automatically suggest previously saved types. Program types can include work, school, leisure, etc.
        Program length: Users can set the program length in minutes.
       - Text editor: Users can enter notes or other information about the program in the block.
        Responsible person: Users can select a person responsible for the program block from a saved list.
        - Save block to library: Users can upload a newly created block to the program block database.
        Move block up or down.
        - Delete block from the creator.
        - Save block in the browser cache.
        - Add a new block, which is added below the current block.

    Reusable blocks tab:

    In this tab, users can find all saved blocks from the creator. Clicking on the "Create new program block" button creates a new program block, which is automatically saved to the program block library. The program type defines the category name in which the program blocks are saved. The program blocks can also be edited or deleted in this library.
        -Users can view the details and delete each saved block.