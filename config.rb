activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true
end

activate :directory_indexes

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-115884969-1'
end

activate :livereload

# Sprockets asset compilation
activate :sprockets
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

