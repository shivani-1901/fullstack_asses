class SurveysController < ApplicationController
  def index
    @surveys = Survey.all
    render json: @surveys
  end

  def create
    @survey = Survey.new(survey_params)
    @survey = Survey.new(survey_params)
    if @survey.save
      redirect_to surveys_path, notice: 'Survey was successfully created.'
    else
      render :new, alert: 'There was an issue creating the survey. Please try again.'
    end
  end

  def show
    @survey = Survey.find(params[:id])
    render json: @survey
  end

  def update
    @survey = Survey.find(params[:id])
    if @survey.update(survey_params)
      render json: @survey
    else
      render json: @survey.errors, status: :unprocessable_entity
    end
  end

  private

  def survey_params
    params.require(:survey).permit(:name, :description)
  end
end
