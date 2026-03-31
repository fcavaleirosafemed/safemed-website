import React from 'react'

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Bem-vindo ao Safemed CMS</h2>
      <p>Utilize o menu lateral para gerir o conteúdo do site.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px', marginTop: '20px' }}>
        <a href="/admin/globals/page-content" style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: '0 0 8px' }}>Conteúdo das Páginas</h3>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Editar textos e imagens das páginas</p>
        </a>
        <a href="/admin/globals/site-settings" style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: '0 0 8px' }}>Definições do Site</h3>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Configurações gerais do site</p>
        </a>
        <a href="/admin/collections/job-positions" style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: '0 0 8px' }}>Vagas</h3>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Gerir posições disponíveis</p>
        </a>
        <a href="/admin/collections/blog-posts" style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: '0 0 8px' }}>Blog</h3>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Gerir artigos e notícias</p>
        </a>
        <a href="/admin/collections/media" style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: '0 0 8px' }}>Media</h3>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Imagens e ficheiros</p>
        </a>
        <a href="/admin/globals/navigation" style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: '0 0 8px' }}>Navegação</h3>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Menu de navegação do site</p>
        </a>
      </div>
    </div>
  )
}

export default Dashboard
