if Rails.env.production?
  Dribbble::Config.enable_redis = true
  Dribbble::Config.expire_time = 60

  redis_info = URI.parse(ENV['REDISTOGO_URL'])
  Dribbble::Config.redis_host = redis_info.host
  Dribbble::Config.redis_port = redis_info.port
  Dribbble::Config.redis_password = redis_info.password
end
