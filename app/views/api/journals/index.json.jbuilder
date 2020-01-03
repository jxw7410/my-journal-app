json.journals do 
  @journals.each do |journal|
    json.partial! partial: 'api/journals/show', journal: journal
  end
end