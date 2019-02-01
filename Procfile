web: bundle exec puma -C config/puma.rb
worker1: QUEUE=1 bundle exec rake jobs:work
worker2: QUEUE=2 bundle exec rake jobs:work
worker3: QUEUE=3 bundle exec rake jobs:work
