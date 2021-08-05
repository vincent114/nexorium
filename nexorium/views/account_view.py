from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='account', renderer='nexorium:templates/main.jinja2')
def account_get(request):
    return dict()
