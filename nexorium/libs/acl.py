
from pyramid import security


# Datas
# ======================================================================================================

ACL = [
    (security.Allow, security.Everyone, ('public')),
    (security.Allow, 'role:M_VIEW', 'view'),
    (security.Allow, 'role:M_EDIT', ('view', 'edit')),
    (security.Allow, 'role:M_ADMIN',  ('view', 'edit', 'admin')),
    security.DENY_ALL,
]
