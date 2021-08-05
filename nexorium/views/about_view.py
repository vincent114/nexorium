from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='about', renderer='nexorium:templates/main.jinja2')
def about_get(request):
    return dict()
