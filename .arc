@app
begin-app

@http
get /
get /foo

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
