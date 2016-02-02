namespace :twitter do
  desc "Empties out the user and tweet tables from the DB"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
  end

  desc "Creates fake users and fake tweets"
  task :posts, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
  end

  desc "Searches twitter for limit number of tweets containing query"
  task :search, [:query, :limit] => :environment do |t, args|
    # Don't bother creating users, just fetch the tweets and shove them in the DB.
  end
end