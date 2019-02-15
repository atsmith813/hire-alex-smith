require 'net/http'
require 'json'

task :purge_cache do
  puts 'PURGING CACHE...'
  uri = URI.parse("https://api.cloudflare.com/client/v4/zones/#{ENV['CLOUDFLARE_IDENTIFIER']}/purge_cache")

  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true

  headers = {
    'X-Auth-Email' => ENV['CLOUDFLARE_EMAIL'],
    'X-Auth-Key' => ENV['CLOUDFLARE_API_KEY'],
    'Content-Type' => 'application/json'
  }

  request = Net::HTTP::Post.new(uri.path, headers)
  request.body = { purge_everything: true }.to_json
  response = http.request(request)

  if response.kind_of? Net::HTTPSuccess
    puts 'CACHE PURGED!'
  else
    puts "ERROR - (#{response.code}) #{response.message}"
  end
end
