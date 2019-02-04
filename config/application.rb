require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module NewsMash
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Port 3000 for local webpack server
    # Port 5000 for local express server
    # http for production
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins ['localhost:3000', '127.0.0.1:3000', 'localhost:5000', '127.0.0.1:5000', 'http://newsmashed.herokuapp.com']
        /\Ahttp:\/\/192\.168\.0\.\d{1,3}(:\d+)?\z/
     
        resource '*',
                 headers: :any,
                 methods: :any
      end
    end
  end
end
