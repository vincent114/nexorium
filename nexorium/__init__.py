
from nexus import smap
smap.register('nexorium')

from pyramid.config import Configurator

from nexorium.resources import Root
from nexorium.resources.app_datas import AppDatasNexorium
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
    config.registry.settings['init_app_callback'] = AppDatasNexorium.to_raw

    # Routes
    # ------------------------------------------------------

    # Blog
    # -

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

    # Documentation
    # -

    config.add_route('docs', '/docs')
    config.add_route('docs_actions', '/docs_actions/{action}')

    # ---

    # Static
    if settings['pyramid.reload_templates'].lower() == 'true':
        config.add_static_view('static', 'nexorium:static', cache_max_age=0)
    else:
        config.add_static_view('static', 'nexorium:static', cache_max_age=60*60*24)

    # ------------------------------------------------------

    config.scan('nexorium:views')

    return config.make_wsgi_app()
