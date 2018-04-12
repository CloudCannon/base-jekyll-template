FROM jekyll/jekyll

EXPOSE 4000
EXPOSE 5678

COPY Gemfile* /srv/jekyll/
WORKDIR /srv/jekyll
RUN bundle install
