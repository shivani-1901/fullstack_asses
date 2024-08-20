require 'rails_helper'

RSpec.describe 'Surveys API', type: :request do
  describe 'POST /surveys' do
    it 'creates a new survey' do
      post '/surveys', params: { survey: { name: 'My Survey', description: 'A simple survey' } }
      expect(response).to have_http_status(:created)
    end
  end

  describe 'PUT /surveys/:id' do
    let!(:survey) { Survey.create(name: 'My Survey') }

    it 'updates an existing survey' do
      put "/surveys/#{survey.id}", params: { survey: { description: 'Updated description' } }
      expect(response).to have_http_status(:ok)
      expect(survey.reload.description).to eq('Updated description')
    end
  end

  describe 'GET /surveys/:id' do
    let!(:survey) { Survey.create(name: 'My Survey') }

    it 'retrieves the survey' do
      get "/surveys/#{survey.id}"
      expect(response).to have_http_status(:ok)
    end
  end
end
