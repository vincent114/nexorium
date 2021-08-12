
from nexus import smap
smap.register('nexorium')

from pyramid.config import Configurator

from nexorium.resources import Root
from nexorium.resources.app_support import AppSupport
from nexorium import views


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(
        settings=settings,
        root_factory = Root,
    )

    config.include('pyramid_jinja2')

    # NxApp config
    config.include('nexus.pyramid')

    # Init callback
    config.registry.settings['init_app_callback'] = AppSupport.to_raw

    # Routes
    # ------------------------------------------------------

    config.add_route('home', '/')
    config.add_route('search', '/search')
    config.add_route('search_actions', '/search_actions/{action}')

    # ---

    # Blog
    # -

    config.add_route('blog', '/blog')
    config.add_route('blog_actions', '/blog_actions/{action}')

    # ---

    # Mes projets
    # -

    config.add_route('projects', '/projects')
    config.add_route('projects_actions', '/projects_actions/{action}')

    # Mon CV
    # -

    config.add_route('cv', '/cv')
    config.add_route('cv_actions', '/cv_actions/{action}')

    # ---

    # Playground
    # -

    config.add_route('playground', '/playground')
    config.add_route('playground_actions', '/playground_actions/{action}')

    # ---

    # A propos
    # -

    config.add_route('about', '/about')

    # Administration
    # -

    config.add_route('admin', '/admin')

    # ---

    # Mon compte

    config.add_route('account', '/account')

    # ---

    # Static
    if settings['pyramid.reload_templates'].lower() == 'true':
        config.add_static_view('static', 'nexorium:static', cache_max_age=0)
    else:
        config.add_static_view('static', 'nexorium:static', cache_max_age=60*60*24)

    # ------------------------------------------------------

    config.scan('nexorium:views')

    return config.make_wsgi_app()
