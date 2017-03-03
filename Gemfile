source 'https://rubygems.org'
ruby '2.3.1'

# Backend
gem 'rails', '5.0.1' # Latest stable
gem 'pg' # Use Postgresql as database
gem 'puma' # Use Puma as the app server
gem 'active_model_serializers' # ActiveModel::Serializer implementation and Rails hooks
gem 'carrierwave' # Classier solution for file uploads for Rails
gem 'carrierwave-aws' # Use the officially supported AWS-SDK library for S3 storage
gem 'mini_magick' # A ruby wrapper for ImageMagick or GraphicsMagick command line
gem 'kaminari' # A Scope & Engine based, clean, powerful, customizable and sophisticated paginator for Rails 3 and 4
gem 'chronic' # Chronic is a pure Ruby natural language date parser.
gem 'paranoia', '~> 2.2.0.pre' # Paranoia is a re-implementation of acts_as_paranoid for Rails 3 and Rails 4. Soft-deletion of records
gem 'ffaker' # A library for generating fake data such as names, addresses, and phone numbers.
gem 'fabrication' # Fabrication generates objects in Ruby. Fabricators are schematics for your objects, and can be created as needed anywhere in your app or specs.

# Authentications & Authorizations
gem 'devise' # Authentication solution for Rails with Warden
gem 'doorkeeper' # OAuth 2 provider
gem 'cancancan', '~> 1.10' # Continuation of CanCan, the authorization Gem for Ruby on Rails.

source 'https://rails-assets.org' do
  gem 'rails-assets-underscore' # Adds Underscore JS to the Rails asset pipeline
  gem 'rails-assets-jquery.cookie' # Adds jquery-cookie to the Rails asset pipeline
  gem 'rails-assets-animate-sass' # Animate.sass for the Rails assets pipeline
end

# Assets
gem 'jquery-rails' # Use jquery as the JavaScript library
gem 'font-awesome-sass' # Font-Awesome Sass gem for use in Ruby/Rails projects
gem 'sass-rails' # SASS
gem 'momentjs-rails' # momentjs

group :development do
  gem 'better_errors' # Better error page for Rails and other Rack apps
  gem 'binding_of_caller' # Retrieve the binding of a method's caller in MRI 1.9.2+
  gem 'bullet' # help to kill N+1 queries and unused eager loading
  gem 'awesome_print' # Pretty print your Ruby objects with style -- in full color and with proper indentation
  gem 'guard-rubocop'
  gem 'roadie-rails' # Mailers
  gem 'rubycritic', require: false # A Ruby code quality reporter
  gem 'brakeman', require: false # A static analysis security vulnerability scanner for Ruby on Rails applications 
end

group :development, :test do
  gem 'figaro' # Simple Rails app configuration

  gem 'rspec-rails' # Rails testing engine
  gem 'guard-rspec' # Auto-run specs
  gem 'shoulda-matchers' # Tests common Rails functionalities
  gem 'zeus-parallel_tests' # Speeding up your tests by preloading a Rails app
  gem 'capybara' # Integration testing
  gem 'poltergeist' # Headless browser
  gem 'database_cleaner' # Use Database Cleaner

  gem 'byebug' # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'spring' # Spring speeds up development by keeping your application running in the background.
  gem 'spring-watcher-listen', '~> 2.0.0' # Makes Spring watch the filesystem for changes using Listen
  gem 'listen', '~> 3.0.5' # Listens to file modifications
  gem 'letter_opener' # Preview mail in the browser instead of sending.
end

group :test do
  gem 'simplecov', require: false # code coverage analysis tool for Ruby
end

group :production do
  gem 'rails_12factor'         # Makes running your Rails app easier. Based on the ideas behind 12factor.net (Heroku)
  gem 'rack-timeout'           # Rack middleware which aborts requests that have been running for longer than a specified timeout.
  gem 'mandrill-api'           # A Ruby API library for the Mandrill email as a service platform.
  gem 'newrelic_rpm'           # New Relic provides you with deep information about the performance of your web application as it runs in production.
  gem 'intercom-rails'         # The easiest way to install Intercom in a Rails app
end
