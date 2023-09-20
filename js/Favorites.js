// Classe que vai conter a lógica dos dados
// Como os dados serão estruturado

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load();
    }

    load() {
        this.entries = [
            {
                login: 'DenilsonJunior',
                name: 'Denilson Junior',
                public_repos: '120',
                followers: '12000'
            },
            {
                login: 'CarlosAlberto1991',
                name: 'Carlos Alberto',
                public_repos: '76',
                followers: '859'
            },
        ]
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login);
        
        console.log(filteredEntries)
    }
}

// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root);

        this.tbody = this.root.querySelector("table tbody");

        this.update();
    }

    update() {
        this.removeAllTr();
        
        this.entries.forEach(user => {
            const row = this.createRow();

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt = `Imagem de ${user.name}`;
            row.querySelector('.user p').textContent = user.name;
            row.querySelector('.user span').textContent = user.login;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                
                if( isOk ) {
                    this.delete(user);
                }
                
            };
            // console.log(row)

            this.tbody.append(row)
        });
    }

    createRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
            <td class="user">
                <img src="" alt="">
                <a target="_blank" href="https://github.com/DenilsonJunior">
                    <p></p>
                    <span></span>
                </a>
            </td>
            <td class="repositories"></td>
            <td class="followers"></td>
            <td>
                <button class="remove">&times</button>
            </td>
        `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove();
        });
    }

    // console.log();
}