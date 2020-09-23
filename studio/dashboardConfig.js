export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6b4d669cc57a3043cf6aa6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mi2rrr2x',
                  apiId: 'cf3b8871-ce0c-4570-8dba-ec0f74455b39'
                },
                {
                  buildHookId: '5f6b4d666146c3126946fb2e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w7aupnu6',
                  apiId: '3024313b-3c61-4667-b794-e57d34248f5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frontDevArt/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w7aupnu6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
