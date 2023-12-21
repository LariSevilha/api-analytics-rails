let requestInProcess = false;

$(document).on('rails_admin.dom_ready', function () {
  const elements = document.querySelectorAll('[data-ckeditor]');
  if (elements.length > 0) {
    const post_id = window.location.pathname.match(/\/(\d+)\/edit$/)[1];

    elements.forEach(element => {
      ClassicEditor.create(element, {
        simpleUpload: {
          uploadUrl: '/post_images/upload/' + post_id,
          headers: {
            'X-CSRF-TOKEN': Rails.csrfToken()
          }
        }
      }).then(editor => {
        editor.model.document.on('change:data', () => {
          const differ = editor.model.document.differ;
          const changes = differ.getChanges();
          let numAttempts = 0; // adiciona uma variável numAttempts para controlar o número de tentativas

          for (const entry of changes) {
            if (entry.type === 'remove' && (entry.name === "imageBlock" || entry.name === "imageInline")) {
              const src = entry.attributes.get('src');
              const post_image_id = src.match(/\/uploads\/post_image\/\d+\/url\/(\d+)\//)[1];
              const deleteUrl = '/post_images/delete/' + post_image_id;
              let requestInProcess = false;

              if (requestInProcess) {
                return;
              }

              requestInProcess = true;
              numAttempts++; // incrementa numAttempts a cada tentativa

              const xhr = new XMLHttpRequest();
              xhr.open("POST", deleteUrl, true);
              xhr.setRequestHeader('X-CSRF-Token', Rails.csrfToken());
              xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.OPENED) {
                  if (xhr.status === 0) {
                    // A solicitação falhou. Tentando novamente...
                    if (numAttempts < 5) {
                      setTimeout(() => xhr.send(), 1000);
                    } else {
                      console.error("Excedeu o número máximo de tentativas. A exclusão da imagem falhou.");
                    }
                  } else if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log("Imagem deletada com sucesso");
                  } else {
                    console.error("Erro ao deletar imagem. Tentando novamente...");
                    setTimeout(() => xhr.send(), 1000);
                  }
                  requestInProcess = false;
                }
              }

              xhr.send();
            }
          }
        });

      }).catch(error => {
        console.error(error);
      });
    });
  }
});
