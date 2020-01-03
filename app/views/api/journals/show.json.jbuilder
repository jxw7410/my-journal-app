json.journal do 
  json.partial! partial: 'api/journals/show', journal: @journal
end