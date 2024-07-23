export const MENU_ITEMS=[
  {
      label: 'Gerencial',
      items: [
          {
              label: 'Dashboard',
              icon: 'pi pi-chart-bar',
              route: '/dashboard'
          }]
        },
        {
          label: 'Cadastros',
          items:[
          {
              label: 'Categorias',
              icon: 'pi pi-list',
              route: '/categories'
          },
          {
              label: 'Produtos',
              icon: 'pi pi-box',
              route: '/products'
          }]
        },
        {
          label: 'Controle de acesso',
          items:[{
            label: 'Usuários',
            icon: 'pi pi-user',
            route: '/users'
          }]


  }
];
