class LawUploader < CarrierWave::Uploader::Base
  include CarrierWave::Vips

  # Choose what kind of storage to use for this uploader:
  if Rails.env.development? || Rails.env.test?
    storage :file
  else
    storage :sftp
  end

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end
  
  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [100, 100]
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    if original_filename.present?
      name = original_filename.gsub(/\.#{file.extension}$/, "")
      name = name.parameterize.truncate(200, omission: "") # limite de 200 caracteres
      "#{name}.#{file.extension}"
    end
  end

  # Only allow files with the following extensions
  def extension_allowlist
    %w(pdf doc docx xls xlsx odt ods odp odg)
  end
end